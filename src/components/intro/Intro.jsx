import React from "react";
import "./intro.css";

import Mee from "../../img/Mee.png";

const Intro = () => {
  return (
    <div id="Intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Natalie Ruiz</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Aspiring Software Developer</div>
            </div>
          </div>
          <div className="i-desc">
            Experienced in front-end and back-end development. I have a passion
            for learning, assisting others, and innovation..
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Mee} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
