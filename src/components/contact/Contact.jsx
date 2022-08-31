import React from "react";
import "./contact.css";
import Phone from "../../img/Phone.webp";
import Mail from "../../img/Mail.jpeg";
import Location from "../../img/Location.png";
import Git from "../../img/git.png";
import Link from "../../img/Link.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uewrju5",
        "template_yrg4ebh",
        formRef.current,
        "63w69LeXRhsm9yjXM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Get in touch</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 980-318-0793
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Mail} alt="" />
              natalie.r0821@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Git} alt="" />
              <a href="https://github.com/ruiznataliee">
                Click here to access my Github
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Link} alt="" />
              <a href="https://www.linkedin.com/in/natalie-ruiz-820310237/">
                Click here to access my Linkin
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Location} alt="" />
              6400 waterford crest drive, charlotte, 28226
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to get in contact with me?</b> Get in touch. Let's talk.
            Always available to answer any questions or hear about any open
            opportunities.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" required/>
            <input type="text" placeholder="Subject" name="user_subject" required/>
            <input type="text" placeholder="Email" name="user_email" required/>
            <textarea rows="5" placeholder="Message" name="message" required/>
            <button>Submit</button>
            {done && "Thank You!!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
