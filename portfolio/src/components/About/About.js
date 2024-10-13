import React from "react";
import "./about.css";
import AboutData from "./AboutData";
import AboutMe from "../../assets/Aboutme.png";
import Resume from "../../assets/Resum.pdf";

function About() {
  return (
    <section className="about section" id="aboutme">
      <h2 className="section_title"> About Me </h2>{" "}
      <span className="section_subtitle"> My introduction </span>{" "}
      <div className="about_container container">
        <img src={AboutMe} className="about_img" alt="About me" />

        <div className="about_data">
          <AboutData />
          <div className="about_description">
            <p className="about_description_1">
              Hi Everyone! My name is Suraj Mandal, and I’m a Software Engineer
              with 1 year of experience at Amadeus Software Labs. I enjoy using
              logic and code to bring innovative ideas to life. Currently, I’m
              working with ReactJs and Angular, crafting beautiful UI-UX designs
              and websites.{" "}
            </p>{" "}
            <p className="about_description_2"> </p>
            <p className="about_description_3">
              {" "}
              Besides coding, I’m passionate about finance and
              love exploring new places.{" "}
            </p>{" "}
          </div>
          <a
            download=""
            href={Resume}
            className="button button--flex cv_download"
          >
            Download CV <i class="uil uil-import"> </i>
          </a>{" "}
        </div>
      </div>{" "}
    </section>
  );
}

export default About;
