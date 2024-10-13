import React from "react";
import data from "./SkillsetData";
import Icons from "./Icons";
import "./skills.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title"> Skills </h2>
      <span className="section_subtitle"> My Technical Skillset </span>
      <div className="skills_container">
        <img
          src={require("../../assets/blobvector.png")}
          className="skills_blob"
          alt="A decorative blob vector"
        />
        {data.map((item) => {
          return <Icons key={item.id} data={item} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
