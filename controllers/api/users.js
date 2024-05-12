const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Poster = require("../../models/posterProfile");
const Photographer = require("../../models/photoProfile");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
  profile: getUserProfile,
  editPosterProfile,
  editPhotographerProfile,
};

async function editPhotographerProfile(req, res) {
  const { userId } = req.params;
  const profileData = req.body;
  const profile = await Photographer.findOneAndUpdate(
    { user: userId },
    profileData,
    { new: true, upsert: true }
  );
  res.json(profile);
}

async function editPosterProfile(req, res) {
  const { userId } = req.params;
  const profileData = req.body;
  const profile = await Poster.findOneAndUpdate({ user: userId }, profileData, {
    new: true,
    upsert: true,
  });
  res.json(profile);
}

async function getUserProfile(req, res) {
  const user = await User.findById(req.params.id)
    .populate("posterProfile")
    .populate("photographerProfile")
    .exec();
  res.json(user);
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials!");
  }
}

async function create(req, res) {
  try {
    // Add user to the db
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- Helper Functions ---*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
