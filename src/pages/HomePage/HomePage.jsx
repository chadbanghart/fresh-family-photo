import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <h1>Fresh Family Photo</h1>
      <div className="container">
        <div className="col-1">
          <img src="./basketball.jpeg" alt="basketball" />
          <img src="./hockey.jpeg" alt="hockey" />
          <img src="./baseball.jpeg" alt="baseball" />
        </div>
        <div className="top-frame">
          <img src="./swimming.jpeg" alt="swim" />
        </div>
        <div className="col-3">
          <img src="./soccer.jpeg" alt="soccer" />
          <img src="./wrestling.jpeg" alt="wrestle" />
        </div>
        <div className="bottom-frame">
          <span>
            <img src="./football.jpeg" alt="football" />
          </span>
        </div>
        <div className="middle">
          <span>
            At Fresh Family Photo, we are committed to capturing the dynamic
            spirit and exhilarating moments of sports through our lens. Our
            mission is to deliver unparalleled excellence in sports photography,
            immortalizing the passion, determination, and triumphs of athletes
            and teams worldwide. Through our dedication to innovation,
            creativity, and professionalism, we strive to preserve the essence
            of every sporting event, empowering athletes and fans alike to
            relive and cherish their unforgettable experiences. With an
            unwavering focus on quality, authenticity, and customer
            satisfaction, we aim to inspire and elevate the world of sports
            photography, one captivating image at a time.
          </span>
          <br />
          <br />
          <span>
            Our Platform offers services for both Job Posters and Photographers!
            As a Job Poster, you will be able to create a job entry that then
            becomes available for the photographers to apply to on our Job
            Board. You will have the ability to edit and view any applicant to
            your job posting within your Jobs page. As a Photographer, you can
            apply to any job you are available for! You have the ability to set
            your profile up with details to help inform the Job Posters about
            yourself, while also being able to attach your resume when you fill
            out your application. You also have the option of writing a pitch
            about why you are a good fit! Navigate to our Log In page to get
            started!
          </span>
        </div>
      </div>
    </>
  );
}
