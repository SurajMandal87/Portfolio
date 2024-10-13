import React from "react";
import "./scrollUp.css";

function ScrollUp() {
    window.addEventListener("scroll", function () {
        const scrollup = document.querySelector(".scrollup");

        //when scroll >= 560 Viewport height, make the uparrow icon visible
        if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
        //else keep it hidden
        else scrollup.classList.remove("show-scroll");
    });

    return (
        <div className="scrollup_container">
            <a href="#home" className="scrollup">
                <i class="uil uil-arrow-up scrollup_icon"> </i>{" "}
            </a>{" "}
        </div>
    );
}

export default ScrollUp;
