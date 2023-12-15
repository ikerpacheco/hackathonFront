import React from "react";
import "./SkillineComponent.css";

const SkillineComponent = () => {
  return (
    <>
      <div className="skillineContainer">
        <div className="softwareContainer">
          <h2 className="AllInOneText">
            What is <span className="spanTitle">Skilline?</span>
          </h2>
          <p className="descriptionSoftwareText" style={{ width: "50%" }}>
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="skillineCardsContainer">
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
    </>
  );
};

export default SkillineComponent;
