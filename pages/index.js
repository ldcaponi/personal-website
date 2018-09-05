import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import Heading from "../components/common/heading/Heading";
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
                  href="/static/files/Resume_Caponi_Lou.pdf"
                  target="_blank"
                  className="button button-primary button-pill"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

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
                  I am a software developer with several years of experience in
                  web application development. My strengths lie in architecting
                  robust solutions that become a solid foundation for
                  extensibility and reusability. With a strong academic
                  background in Mathematics, I take my love for problem solving
                  into everything I do. I have strong industry experience
                  developing enterprise level applications with large
                  organizations like{" "}
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
        <section className="Experience">hi</section>
        <section className="Contact">
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
                    className="pure-input-1"
                  />
                  <label html-for="email">Email</label>
                  <input
                    id="email"
                    name="_replyto"
                    type="email"
                    className="pure-input-1"
                  />
                  <label html-for="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="pure-input-1"
                    placeholder="Tell me about your next project!"
                  />
                </fieldset>
                <input
                  className="button button-pill"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
