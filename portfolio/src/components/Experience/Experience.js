import React, { useState } from "react";
import "./experience.css";

function Experience() {
  const [tab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title"> Qualification </h2>{" "}
      <span className="section_subtitle"> My Personal Journey </span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              tab === 1
                ? "qualification_button button--flex qualification_active"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"> </i>
            Education{" "}
          </div>
          <div
            className={
              tab === 2
                ? "qualification_button button--flex qualification_active"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"> </i>
            Experience{" "}
          </div>{" "}
        </div>
        <div className="qualification_sections">
          <div
            className={
              tab == 1
                ? "qualification_content qualification_content_active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  {" "}
                  DAV Public School{" "}
                </h3>{" "}
                <span className="qualification_subtitle"> Class X </span>{" "}
                <p className="qualification_description"> CGPA: 8 </p>{" "}
                <div className="qualification_date">
                  <i class="uil uil-calendar-alt"> </i>
                  2015{" "}
                </div>{" "}
              </div>
              <div>
                <span className="qualification_rounder"> </span>{" "}
                <span className="qualification_line"> </span>{" "}
              </div>{" "}
            </div>
            <div className="qualification_data">
              <div> </div>
              <div>
                <span className="qualification_rounder"> </span>{" "}
                <span className="qualification_line"> </span>{" "}
              </div>
              <div>
                <h3 className="qualification_title">
                  {" "}
                  Nalanda Public School{" "}
                </h3>{" "}
                <span className="qualification_subtitle"> Class XII </span>{" "}
                <p className="qualification_description"> Percentage: 76.8 </p>{" "}
                <div className="qualification_date">
                  <i class="uil uil-calendar-alt"> </i>
                  2017{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title"> NIT Agartala </h3>{" "}
                <span className="qualification_subtitle">
                  {" "}
                  B.Tech - Electrical{" "}
                </span>{" "}
                <p className="qualification_description">
                  {" "}
                  CGPA: 8.2 
                </p>
                <div className="qualification_date">
                  <i class="uil uil-calendar-alt"> </i>
                  2023{" "}
                </div>{" "}
              </div>

              <div>
                <span className="qualification_rounder"> </span>{" "}
                <span className="qualification_line"> </span>{" "}
              </div>
            </div>{" "}
          </div>{" "}
        </div>
        <div className="qualification_sections">
          <div
            className={
              tab == 2
                ? "qualification_content qualification_content_active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  {" "}
                  Airport Authority of India{" "}
                </h3>{" "}
                <span className="qualification_subtitle"> Intern </span>{" "}
                <p className="qualification_description"> CNS Dept </p>{" "}
                <div className="qualification_date">
                  <i class="uil uil-calendar-alt"> </i>
                  December 2020{" "}
                </div>{" "}
              </div>
              <div>
                <span className="qualification_rounder"> </span>{" "}
                <span className="qualification_line"> </span>{" "}
              </div>{" "}
            </div>
            <div className="qualification_data">
              <div> </div>

              <div>
                <span className="qualification_rounder"> </span>{" "}
                <span className="qualification_line"> </span>{" "}
              </div>

              <div>
                <h3 className="qualification_title">
                  {" "}
                  Nokia Solutions and Network{" "}
                </h3>{" "}
                <span className="qualification_subtitle">
                  {" "}
                  Software Engineer{" "}
                </span>{" "}
                <p className="qualification_description">
                  {" "}
                  Global Services{" "}
                </p>{" "}
                <div className="qualification_date">
                  <i class="uil uil-calendar-alt"> </i>
                  2021 - Present{" "}
                </div>{" "}
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Experience;
