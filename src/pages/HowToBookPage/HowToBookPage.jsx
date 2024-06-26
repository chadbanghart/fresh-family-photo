import "./HowToBookPage.css";

export default function HowToBookPage() {
  return (
    <>
      <h1>How To Book</h1>
      <div>
        <div className="section-container">
          <img src="./book.png" alt="booking" />
          <div className="text-content">
            <h4>01</h4>
            <h2>Request a Shoot</h2>
            <ul>
              <h5>
                Within your "My Jobs" page you can submit any event you have,{" "}
                <br />
                just provide the following details:
              </h5>
              <div className="list-container">
                <li>Name of your job</li>
                <li>Date of the job</li>
                <li>Location of the job</li>
                <li>
                  Description of your job to let our photographers know what
                  they should expect. Be sure to include any relevant info
                  regarding necessary experience and the types of shots you'll
                  be looking to get from them!
                </li>
              </div>
            </ul>
          </div>
        </div>
        <hr />
        <div className="section-container">
          <div className="text-content">
            <h4>02</h4>
            <h2>Receive a Confirmation</h2>
            <p>
              You will shortly receive a confirmation from us. We will then post
              your job to our Job Board where our pool of photographers can then
              submit an application. You will be able to view a list of
              applicants who have applied to your job within your job details
              page. Their contact information will be available for you to
              contact them to get a better feel for if they are the right fit.
              Once you have selected your photographer we will book them for
              you.
            </p>
          </div>
          <img src="./Check.png" alt="check" />
        </div>
        <hr />
        <div className="section-container">
          <img src="./pay.png" alt="pay" />
          <div className="text-content">
            <h4>03</h4>
            <h2>Pay the deposit</h2>
            <p>
              You will pay a deposit of 30%. The money goes to the photographer
              to cover setup and fuel costs getting to your event. Once the
              photographer is on-site, the remainder of the payment is made.
            </p>
          </div>
        </div>
        <hr />
        <div className="section-container">
          <div className="text-content">
            <h4>04</h4>
            <h2>View Your Photos</h2>
            <p>
              View all your photos of the event and download them directly to
              your computer or smartphone.
            </p>
            <p>Print services are provided at additional cost.</p>
          </div>
          <img src="./view.png" alt="view" />
        </div>
      </div>
    </>
  );
}
