import "./Home.css";

const Home = () => {
  return (
    <div className="page">
      <div className="background">
        <div className="roundBackground" />
        <div className="content">
          <div className="leftSide">
            <div className="infoContainer">
              <h1 className="titleText">
                <span className="spanTitle">Studying</span> online is now much
                easier
              </h1>
              <p className="descriptionText">
                Skilline is an interesting platform that will teach you in more
                an interactive way
              </p>
              <div className="buttonsContainer">
                <button className="joinFreeButton">Join for free</button>
                <button className="playButton">play</button>
                <button className="howItWorksButton">Watch how it works</button>
              </div>
            </div>
          </div>
          <div className="rightSide"></div>
        </div>
      </div>

      <div className="softwareSectionContainer">
        <div className="trustedCompaniesContainer">
          <h4 className="trustedText">Trusted by 5000+ Companies Worldwide</h4>
        </div>
        <div className="softwareContainer">
          <h2 className="AllInOneText">
            All-In-One <span className="spanTitle">Cloud Software.</span>
          </h2>
          <p className="descriptionSoftwareText">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
        <div className="cardsContainer">
          <div className="card">
            <div className="round" />
            <div className="cardInfo">
              <h2 className="titleCard">
                Online Billing, Invoicing, & Contracts
              </h2>
              <p className="descriptionCard">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
          </div>
          <div className="card">
            <div className="round" style={{ backgroundColor: "#F48C06" }} />
            <div className="cardInfo">
              <h2 className="titleCard">
                Easy scheduling & Attendance tracking
              </h2>
              <p className="descriptionCard">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </p>
            </div>
          </div>
          <div className="card">
            <div className="round" style={{ backgroundColor: "#29B9E7" }} />
            <div className="cardInfo">
              <h2 className="titleCard" style={{ marginTop: "5vh" }}>
                Customer Tracking
              </h2>
              <p className="descriptionCard">
                Automate and track emails to individuals or groups. Skilline’s
                built-in system helps organize your organization
              </p>
            </div>
          </div>
        </div>

        <div className="skillineContainer">
          <div className="softwareContainer">
            <h2 className="AllInOneText">
              What is <span className="spanTitle">Skilline?</span>
            </h2>
            <p className="descriptionSoftwareText" style={{ width: "50%" }}>
              Skilline is a platform that allows educators to create online
              classes whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </p>
          </div>
        </div>
        <div className="cardsContainer">
          <div className="skillineCard">
            <img
              className="instructorsImg"
              src={require("../../media/instructors.png")}
              alt=""
            />
            <h3 style={{ color: "white", fontSize: "25px" }}>
              FOR INSTRUCTORS
            </h3>
            <button className="borderButton">Start a class today</button>
          </div>
          <div className="skillineCard">
            <img
              className="instructorsImg"
              src={require("../../media/students.png")}
              alt=""
            />
            <h3 style={{ color: "white", fontSize: "25px" }}>FOR STUDENTS</h3>
            <button className="blueButton">Enter access code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
