export default function AboutUsPage() {
  return (
    <>
      <h1>Contact Us</h1>
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
