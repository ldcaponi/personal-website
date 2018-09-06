import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import Heading from "../components/common/heading/Heading";
import PortfolioItem from "../components/common/cards/PortfolioItem";
import Footer from "../components/footer/Footer";
import { Element } from "react-scroll";
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
              <div className="my-resume">
                <a
                  href="/static/files/Resume__Caponi_Lou.pdf"
                  target="_blank"
                  className="button button-primary button-pill"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <Element name="AboutMe">
          <section className="AboutMe">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <div className="text-center">
                    <Heading>About Me</Heading>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-9">
                  <div className="text-center">
                    I am a software developer with several years of experience
                    in web application development. My strengths lie in
                    architecting robust solutions that become a solid foundation
                    for extensibility and reusability. With a strong academic
                    background in Mathematics, I take my love for problem
                    solving into everything I do. I have strong industry
                    experience developing enterprise level applications with
                    large organizations like{" "}
                    <span style={{ color: "dodgerblue" }}>
                      Raymond James Financial
                    </span>{" "}
                    and{" "}
                    <span style={{ color: "dodgerblue" }}>CA Technologies</span>.{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="CodeSamples">
          <section className="CodeSamples">
            <div className="text-center">
              <Heading>Projects</Heading>
            </div>
            <div className="container">
              <div className="row">
                <PortfolioItem
                  imageSrc={"/static/images/dashboard3.png"}
                  title="React Dashboard Starter"
                  description="This project was created as a portfolio piece to display the use of React, React Router, Bootstrap 4, and Chart.js."
                  tags={[
                    "React",
                    "React Router",
                    "Bootstrap 4",
                    "Sass",
                    "Webpack"
                  ]}
                  demoLink="https://objective-northcutt-d138c8.netlify.com/"
                  githubLink="https://github.com/ldcaponi/react-dashboard-starter"
                />
              </div>
            </div>
          </section>
        </Element>

        <Element name="Contact">
          <section className="Contact">
            <h1 className="section-header">Get in Touch</h1>
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-8">
                <form
                  className="pure-form"
                  action="https://formspree.io/ldcaponi@gmail.com"
                  method="POST"
                >
                  <fieldset className="pure-group">
                    <label html-for="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="pure-input"
                    />
                    <label html-for="email">Email</label>
                    <input
                      id="email"
                      name="_replyto"
                      type="email"
                      className="pure-input"
                    />
                    <label html-for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="pure-input"
                      rows="7"
                    />
                  </fieldset>
                  <div className="form-button-container">
                    <input
                      className="button button-pill"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Element>

        <Footer />
      </div>
    );
  }
}

export default Home;
