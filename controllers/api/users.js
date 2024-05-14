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

  try {
    const user = await User.findById(userId);

    // Update the photographer profile and link it to the user
    const profile = await Photographer.findOneAndUpdate(
      { user: userId },
      { ...profileData, user: userId },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    // Update user document if photographerProfile is not set
    if (!user.photographerProfile) {
      user.photographerProfile = profile._id;
      await user.save();
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

async function editPosterProfile(req, res) {
  const { userId } = req.params;
  const profileData = req.body;

  try {
    const user = await User.findById(userId);

    const profile = await Poster.findOneAndUpdate(
      { user: userId },
      { ...profileData, user: userId },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    if (!user.posterProfile) {
      user.posterProfile = profile._id;
      await user.save();
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
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
