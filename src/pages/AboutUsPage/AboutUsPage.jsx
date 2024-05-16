import "./AboutUsPage.css";

export default function AboutUsPage() {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="image-container">
        <div>
          <img src="./Swimming.jpeg" alt="swim" />
        </div>
        <div>
          <img src="./Basketball.jpeg" alt="basketball" />
        </div>
        <div>
          <img src="./Football.jpeg" alt="football" />
        </div>
        <div>
          <img src="./Baseball.jpeg" alt="baseball" />
        </div>
        <div>
          <img src="./Soccer.jpeg" alt="soccer" />
        </div>
        <div>
          <img src="./Hockey.jpeg" alt="hockey" />
        </div>
      </div>
      <div>
        <p>
          Have more questions about how our platform works? Feel free to reach
          out to us with any questions you have by filling out the form below!
        </p>
        <form>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Write a message</label>
          <textarea name="message" id="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
