import React from "react";

function AboutData() {
  return (
    <div className="about_info">
      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"> </i>{" "}
        <h3 className="about_title"> Experience </h3>{" "}
        <span className="about_subtitle"> 1 + years </span>{" "}
      </div>

      <div className="about_box">
        <i class="bx bx-award about_icon"> </i>{" "}
        <h3 className="about_title"> Completed </h3>{" "}
        <span className="about_subtitle"> 5 + Projects </span>{" "}
      </div>
    </div>
  );
}

export default AboutData;
