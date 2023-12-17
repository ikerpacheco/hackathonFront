import "./Home.css";
import Navbar from "./components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="page">
      <div className="background">
        <Navbar />
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
        <h4 className="trustedText">Trusted by 5000+ Companies Worldwide</h4>
      </div>
    </div>
  );
};

export default Home;
