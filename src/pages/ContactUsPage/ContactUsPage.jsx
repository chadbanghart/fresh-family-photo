import "./ContactUsPage.css";

export default function ContactUsPage() {
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
        <p>Have more questions about how our platform works?</p>
        <p>
          Feel free to reach out to us with any questions you have by filling
          out the form below!
        </p>
        <div className="contact-form-container">
          <h3>Contact Us</h3>
          <form className="contact-form">
            <div className="input-first">
              <label>First Name</label>
              <input type="text" name="firstName" />
            </div>
            <div className="input-last">
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>

            <div className="input-email">
              <label>Email *</label>
              <input type="text" name="email" />
            </div>
            <div className="input-message">
              <label>Write a message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div className="button-cont">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
