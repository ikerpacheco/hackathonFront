import React from "react";
import "./TestimonialsComponent.css";

const TestimonialsComponent = () => {
  return (
    <>
      <div className="integrationsContainer">
        <div className="featureContainer">
          <div>
            <div className="titleIntegrationsContainer">
              <div className="line" />
              <h3 className="IntegrationsTitle">TESTIMONIALS</h3>
            </div>
            <h2 className="toDoTitle" style={{ textAlign: "left" }}>
              What They Say?
            </h2>
            <p
              className="toDoDescription"
              style={{ width: "70%", textAlign: "left" }}
            >
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p
              className="toDoDescription"
              style={{ width: "70%", textAlign: "left" }}
            >
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p
              className="toDoDescription"
              style={{ width: "70%", textAlign: "left" }}
            >
              Are you too? Please give your assessment
            </p>
            <button
              className="seeMoreFeaturesButton"
              style={{
                width: "50%",
                paddingLeft: "2vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              Write your assessment
              <div className="arrowButton">
                <img
                  src={require("../../media/arrow.png")}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </button>
          </div>
          <img src={require("../../media/testimonials.png")} alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialsComponent;
