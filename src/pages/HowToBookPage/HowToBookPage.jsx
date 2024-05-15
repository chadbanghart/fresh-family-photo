import "./HowToBookPage.css";

export default function HowToBookPage() {
  return (
    <>
      <h1>How To Book</h1>
      <div>
        <div class="step">
          <h4>01</h4>
          <h5>Request a Shoot</h5>
          <ul>
            <li>
              Within your "My Jobs" page you can submit any event you have just
              provide the following details
            </li>
            <li>Name of your job</li>
            <li>Date of the job</li>
            <li>Location of the job</li>
            <li>
              Description of your job to let our photographers know what they
              should expect. Be sure to include any relevant info regarding
              necessary experience and the types of shots you'll be looking to
              get from them!
            </li>
          </ul>
        </div>
        <hr />
        <div class="step">
          <h4>02</h4>
          <h5>Receive a Confirmation</h5>
          <p>
            You will shortly receive a confirmation from us. We will then post
            your job to our Job Board where our pool of photographers can then
            submit an application. You will be able to view a list of applicants
            who have applied to your job within your job details page. Their
            contact information will be available for you to contact them to get
            a better feel for if they are the right fit. Once you have selected
            your photographer we will book them for you.
          </p>
        </div>
        <hr />
        <div class="step">
          <h4>03</h4>
          <h5>Pay the deposit</h5>
          <p>
            You will pay a deposit of 30%. The money goes to the photographer to
            cover setup and fuel costs getting to your event. Once the
            photographer is on-site, the remainder of the payment is made.
          </p>
        </div>
        <hr />
        <div class="step">
          <h4>04</h4>
          <h5>View Your Photos</h5>
          <p>
            View all your photos of the event and download them directly to your
            computer or smartphone.
          </p>
          <p>Print services are provided at additional cost.</p>
        </div>
      </div>
    </>
  );
}
