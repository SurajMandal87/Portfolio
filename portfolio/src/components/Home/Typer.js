import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./home.css";

function Typer() {
  return (
    <div className="role">
      <TypeAnimation
        sequence={[
          // Same String at the start will only be typed once, initially
          "Web Developer",
          2000,
          "Full Stack Developer",
          1000,
          "Coder",
          2000,
          "Front-End Developer",
          1000,
        ]}
        speed={50}
        style={{
          fontSize: "1.4rem",
        }}
        repeat={Infinity}
        className="role"
      />
    </div>
  );
}

export default Typer;
