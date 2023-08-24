import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll__down" onClick={() => {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    }}>
      <a className="mouse__wrapper">
        <span className="home__scroll-name">Aşağı Kaydır</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
}

export default ScrollDown;