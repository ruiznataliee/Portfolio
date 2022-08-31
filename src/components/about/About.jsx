import React from "react";
import "./about.css";
import Me from "../../img/Me.png";
import Resume from "../../img/Resume.pdf";

function About() {
  return (
    <div id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title"> About Me</h1>
        <p className="a-sub">
          I am an upcoming software engineer that is currently an apprentice at
          Road to Hire. I'm undergoing a rigorous 6-month program to learn not
          only technical skills but professional skills as well. Perfected time
          management to be able to meet deadlines on time. I moved around my
          whole life, so I adapt quickly to any work environment. I can work
          well with others and can work independently as well. I'm seeking to
          use all of my professional and technical skills to obtain a
          challenging opportunity as a software developer. In my free time, I
          enjoy traveling and taking a nice hike to clear my mind.
        </p>
        <a download="" href={Resume} className="button">Download my Resume</a>
      </div>
    </div>
  );
}

export default About;
