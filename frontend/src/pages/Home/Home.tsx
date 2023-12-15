import CloudComponent from "../../components/CloudComponent/CloudComponent";
import FeaturesComponent from "../../components/FeaturesComponent/FeaturesComponent";
import SkillineComponent from "../../components/SkillineComponent/SkillineComponent";
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
      <CloudComponent />
      <SkillineComponent />
      <FeaturesComponent />
    </div>
  );
};

export default Home;
