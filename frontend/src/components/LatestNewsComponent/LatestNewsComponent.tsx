import React from "react";
import "./LatestNewsComponent.css";

const LatestNewsComponent = () => {
  return (
    <>
      <div className="latestNewsContainer">
        <h2 className="toDoTitle">Latest News and Resources</h2>
        <p className="toDoDescription">
          See the developments that have ocurred to Skillines in the world
        </p>
        <img
          src={require("../../media/news.png")}
          alt=""
          style={{ marginTop: "5vh", width: "75%", height: "75%" }}
        />
      </div>
    </>
  );
};

export default LatestNewsComponent;
