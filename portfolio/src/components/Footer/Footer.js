import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title"> Suraj Mandal </h1>{" "}
        <div className="footer_navbar">
          <ul className="footer_list">
            <li>
              <a href="#aboutme" className="footer_link">
                {" "}
                About{" "}
              </a>{" "}
            </li>
            <li>
              <a href="#skills" className="footer_link">
                {" "}
                Skills{" "}
              </a>{" "}
            </li>
            <li>
              <a href="#portfolio" className="footer_link">
                {" "}
                Portfolio{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>
        <div className="footer_social">
          <a
            href="https://www.instagram.com/suraj.mandal__/profilecard/?igsh=NjVmc2l1Y25ranBw"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-instagram"> </i>{" "}
          </a>
          <a
            href="https://x.com/Mandalsuraj73"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-twitter"> </i>{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/surajkumarmandal/"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-linkedin"> </i>{" "}
          </a>{" "}
        </div>
        <span className="rights_reserved">
          {" "}
          &#169;surajkumarmandal. All rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
