import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <>
      <div className="footerContainer">
        <img
          src={require("../../media/icons.png")}
          alt=""
          style={{ marginTop: "5vh", marginBottom: "2vh" }}
        />
        <h4 className="trustedText" style={{ fontWeight: "800" }}>
          Subscribe to get our Newsletter
        </h4>
        <div className="inputContainer">
          <input type="text" className="borderInput" placeholder="Your Email" />
          <button className="subscribeButton">Subscribe</button>
        </div>
        <h4
          className="trustedText"
          style={{ fontWeight: "800", marginTop: "5vh" }}
        >
          Careers | Privacy Policy | Terms & Conditions
        </h4>
        <h4 className="trustedText" style={{ fontWeight: "800" }}>
          2021 Class technologies, Inc.
        </h4>
      </div>
    </>
  );
};

export default FooterComponent;
