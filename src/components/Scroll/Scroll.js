import React, { useEffect } from "react";
import "./Scroll.css";
import img from "../../assets/icons/icons8-upward-arrow.gif";
const Scroll = () => {
  useEffect(() => {
    // scroll to top functionality
    const scrollUp = document.querySelector("#scroll-up");

    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    <div>
      <i className="scroll-up" id="scroll-up">
        <img src={img} className="socicon up-arrow" alt="scroll-up" />
      </i>
    </div>
  );
};

export default Scroll;
