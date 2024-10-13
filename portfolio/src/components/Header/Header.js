import React, { useState } from "react";
import "./header.css";

function Header() {
  // ================== Change Background Header ==================

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    // when scroll >= 200 Viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    //else keep it hidden
    else header.classList.remove("scroll-header");
  });

  // =================== Toggle Menu ==========================
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a
            href="#home"
            onClick={() => setActiveNav("#home")}
            className={
              activeNav === "#home" ? "nav_logo active-link" : "nav_logo"
            }
          >
            Home{" "}
          </a>
          <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list ">
              <li className="nav_item">
                <a
                  href="#aboutme"
                  onClick={() => setActiveNav("#aboutme")}
                  className={
                    activeNav === "#aboutme"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-user nav_icon"> </i>About Me{" "}
                </a>{" "}
              </li>

              <li className="nav_item">
                <a
                  href="#qualification"
                  onClick={() => setActiveNav("#qualification")}
                  className={
                    activeNav === "#qualification"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-graduation-cap nav_icon"> </i>
                  Qualifications{" "}
                </a>{" "}
              </li>

              <li className="nav_item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-file-alt nav_icon"> </i>Skills{" "}
                </a>{" "}
              </li>

              <li className="nav_item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-scenery nav_icon"> </i>Portfolio{" "}
                </a>{" "}
              </li>

              {/* 
            							<li className='nav_item'>
            								<a href="#socials" className='nav_link'>
            									<i className='uil uil-twitter nav_icon'></i>Socials
            								</a>
            							</li> */}

              <li className="nav_item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-message nav_icon"> </i>Contact Me{" "}
                </a>{" "}
              </li>

              <i className="uil uil-times nav_close" onClick={handleToggle}>
                {" "}
              </i>
            </ul>
            <div
              className={toggle ? "nav_toggle hide_toggle" : "nav_toggle"}
              onClick={handleToggle}
            >
              <i className="uil uil-apps"> </i>{" "}
            </div>{" "}
          </div>{" "}
        </nav>
      </header>{" "}
    </div>
  );
}

export default Header;
