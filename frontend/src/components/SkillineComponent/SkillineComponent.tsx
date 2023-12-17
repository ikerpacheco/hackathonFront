import React from "react";
import "./SkillineComponent.css";

const SkillineComponent = () => {
  return (
    <div style={{ marginBottom: "20vh" }}>
      <div className="skillineContainer">
        <div className="softwareContainer">
          <h2 className="AllInOneText">
            What is <span className="spanTitle">Skilline?</span>
          </h2>
          <p className="toDoDescription" style={{ width: "50%" }}>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15vh",
        }}
      >
        <div className="toDoContainer">
          <div className="leftSideContainer">
            <img className="decorationsImg" src={require("../../media/decorations.png")} alt="" />
            <h1 className="toDoTitle">
              Everything you can do in a physical classroom,{" "}
              <span style={{ color: "#F48C06" }}>you can do with Skilline</span>
            </h1>
            <p className="toDoDescription" style={{ width: "90%" }}>
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <button className="emptyButton">
              <p className="learnMoreButton">Learn more</p>
            </button>
          </div>
          <div className="rightSideContainer">
            <img
              className="toDoImg"
              src={require("../../media/toDoImg.jpeg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillineComponent;
