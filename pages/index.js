import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <section className="Header">
          <div className="dark-layer">
            <Navbar />
            <div className="callout center-all">
              <Fade bottom>
                <div className="my-name">Lou Caponi</div>
              </Fade>{" "}
              <span className="spacer" />
              <div className="my-title">Software Developer</div>
              <div className="my-description">
                JavaScript Developer from Long Island, New York with a strong
                focus on modern frontend libraries, frameworks, and tooling.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
