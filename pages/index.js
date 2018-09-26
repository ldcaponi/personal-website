import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../components/navbar/Navbar";
import Heading from "../components/common/heading/Heading";
import PortfolioItem from "../components/common/cards/PortfolioItem";
import Footer from "../components/footer/Footer";
import { Element } from "react-scroll";
import Head from "next/head";
import Tag from "../components/common/cards/Tag";
import { skills } from "../config";
import SocialIcons from "../components/common/icons/SocialIcons";
import Headroom from "react-headroom";
import allPosts from "../config/posts/allPosts.json";
import BlogPostCard from "../components/common/cards/BlogPostCard";
import Link from "next/link";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Head>
          <title>Lou Caponi - Software Developer</title>
          <meta property="og:title" content="Lou Caponi - Software Developer" />
          <meta
            property="og:description"
            content="JavaScript Developer from Long Island, New York with a strong focus on modern frontend libraries, frameworks, and tooling."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.loucaponi.com" />
          <meta
            property="og:image"
            content="https://www.loucaponi.com/static/images/bg.jpeg"
          />
        </Head>
        <section className="Header">
          <div className="dark-layer">
            <Headroom>
              <div className="dark-layer">
                <Navbar />
              </div>
            </Headroom>
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
                <div className="icons-container">
                  <SocialIcons />
                </div>
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

                <PortfolioItem
                  inverted
                  imageSrc={"/static/images/my-website.png"}
                  title="My Personal Website"
                  description="This project was built using Next JS utilizing server-rendered React.  Planning on integrating a blog soon, so using Next with static site generation is a clear choice."
                  tags={[
                    "Next",
                    "React",
                    ,
                    "Bootstrap 4",
                    "Sass",
                    "Static Site Generation"
                  ]}
                  githubLink="https://github.com/ldcaponi/personal-website"
                />
              </div>
            </div>
          </section>
        </Element>

        <Element name="Skills">
          <section className="Skills">
            <div className="text-center">
              <Heading>Skills</Heading>
            </div>
            <div className="container">
              <div className="row">
                {skills.map(i => (
                  <Tag style={{ margin: "0 auto" }} key={i}>
                    {i}
                  </Tag>
                ))}
              </div>
            </div>
          </section>
        </Element>

        <Element name="Blog">
          <section className="Blog">
            <div className="text-center">
              <Heading>Recent Posts</Heading>
            </div>

            <div className="container">
              <div className="row">
                {Object.keys(allPosts)
                  .reverse()
                  .slice(0, 2)
                  .map(i => (
                    <div key={i} className="col-sm-12 col-lg-6">
                      <BlogPostCard post={allPosts[i]} />
                    </div>
                  ))}
              </div>
            </div>

            <Link href="/blog">
              <button className="button button-primary button-pill">
                See More Posts...
              </button>
            </Link>
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
