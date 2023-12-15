import React from "react";
import "./IntegrationsComponent.css";

const IntegrationsComponent = () => {
  return (
    <>
      <div className="integrationsContainer">
        <div className="featureContainer" style={{ marginLeft: "15vh" }}>
          <img src={require("../../media/applications.png")} alt="" />
          <div style={{ marginLeft: "20vh" }}>
            <div className="titleIntegrationsContainer">
              <div className="line" />
              <h3 className="IntegrationsTitle">INTEGRATIONS</h3>
            </div>
            <h2 className="toDoTitle" style={{ textAlign: "left" }}>
              200+ educational tools and <br />
              platforms <span style={{ color: "#F48C06" }}>integrations </span>
            </h2>
            <p
              className="toDoDescription"
              style={{ width: "70%", textAlign: "left" }}
            >
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>
            <button className="seeMoreFeaturesButton" style={{ width: "30%" }}>
              See All Integrations
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationsComponent;
