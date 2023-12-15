import React from "react";
import "./CloudComponent.css";

const CloudComponent = () => {
  return (
    <div className="softwareSectionContainer">
      <div className="trustedCompaniesContainer">
        <h4 className="trustedText">Trusted by 5000+ Companies Worldwide</h4>
        <img
          src={require("../../media/Companies.png")}
          alt=""
          style={{ width: "80%", marginTop: "3vh", marginBottom: "5vh" }}
        />
      </div>
      <div className="softwareContainer">
        <h2 className="AllInOneText">
          All-In-One <span className="spanTitle">Cloud Software.</span>
        </h2>
        <p className="toDoDescription">
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
            <h2 className="titleCard">Easy scheduling & Attendance tracking</h2>
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
    </div>
  );
};

export default CloudComponent;
