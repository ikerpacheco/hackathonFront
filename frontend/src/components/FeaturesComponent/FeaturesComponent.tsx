import React from "react";
import "./FeaturesComponent.css";

const FeaturesComponent = () => {
  return (
    <>
      <div className="featuresContainer">
        <h2 className="AllInOneText">
          Our <span style={{ color: "#F48C06" }}>Features</span>
        </h2>
        <p className="toDoDescription">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
        <div className="feature1">
          <div className="content">
            <div className="leftSide">
              <img src={require("../../media/FeaturesImg.png")} alt="" />
            </div>
            <div className="rightSide">
              <h2 className="toDoTitle" style={{ textAlign: "left" }}>
                A <span style={{ color: "#F48C06" }}>user interface </span>
                designed for the classroom
              </h2>
              <div className="bulletPointsContainer">
                <div className="bulletPoint">
                  <div className="point">
                    <img
                      className="bulletImg"
                      src={require("../../media/bullet1.png")}
                      alt=""
                    />
                  </div>
                  <p
                    className="toDoDescription"
                    style={{ width: "60%", textAlign: "left" }}
                  >
                    Teachers don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </p>
                </div>
                <div className="bulletPoint">
                  <div className="point">
                    <img
                      className="bulletImg"
                      src={require("../../media/bullet2.png")}
                      alt=""
                    />
                  </div>
                  <p
                    className="toDoDescription"
                    style={{ width: "60%", textAlign: "left" }}
                  >
                    TA’s and presenters can be moved to the front of the class.
                  </p>
                </div>
                <div className="bulletPoint">
                  <div className="point">
                    <img
                      className="bulletImg"
                      src={require("../../media/bullet3.png")}
                      alt=""
                    />
                  </div>
                  <p
                    className="toDoDescription"
                    style={{ width: "60%", textAlign: "left" }}
                  >
                    Teachers can easily see all students and class data at one
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature2">
          <div className="featureContainer">
            <div>
              <h2 className="toDoTitle" style={{ textAlign: "left" }}>
                <span style={{ color: "#F48C06" }}>Tools </span>
                For Teachers And Learners
              </h2>
              <p
                className="toDoDescription"
                style={{ width: "90%", textAlign: "left" }}
              >
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>
            <img src={require("../../media/feature2.png")} alt="" />
          </div>
        </div>

        <div className="feature3">
          <div className="featureContainer">
            <img src={require("../../media/feature3.png")} alt="" />
            <div style={{ marginLeft: "15vh" }}>
              <h2 className="toDoTitle" style={{ textAlign: "left" }}>
                Assesments, <br />
                <span style={{ color: "#F48C06" }}>Quizzes, </span>
                Tests
              </h2>
              <p
                className="toDoDescription"
                style={{ width: "70%", textAlign: "left" }}
              >
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
        </div>

        <div className="feature4">
          <div className="featureContainer">
            <div>
              <h2 className="toDoTitle" style={{ textAlign: "left" }}>
                <span style={{ color: "#F48C06" }}>
                  Class Management <br />
                </span>
                Tools for Educators
              </h2>
              <p
                className="toDoDescription"
                style={{ width: "90%", textAlign: "left" }}
              >
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <img src={require("../../media/Feature4.png")} alt="" />
          </div>
        </div>

        <div className="feature5">
          <div className="featureContainer">
            <img src={require("../../media/Feature5.png")} alt="" />
            <div style={{ marginLeft: "15vh" }}>
              <h2 className="toDoTitle" style={{ textAlign: "left" }}>
                One-on-One, <br />
                <span style={{ color: "#F48C06" }}>Discussions </span>
              </h2>
              <p
                className="toDoDescription"
                style={{ width: "70%", textAlign: "left" }}
              >
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </div>
        <div className="seeMoreFeaturesContainer">
          <button className="seeMoreFeaturesButton">See more features</button>
        </div>
      </div>
    </>
  );
};

export default FeaturesComponent;
