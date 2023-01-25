import React from "react";
import "../css/about.css";
const About = () => {
  return (
    <section className="aboutSec">
      <h2 className="aboutHeading">About Me</h2>
      <div className="aboutCont">
        <p className="mySelf">
          My name is Danish.I compeleted my grauduation in computer applications
          and I have skills like Javascript ,Css ,HTML ,BootStrap ,React.js .I
          want to fly high with my passion following the dreams of the
          organisation with all my efforts and dedication.I believe in Learning
          new things.
        </p>
        <div className="container">
          <div className="imgCont">
            <img
              className="aboutImage"
              src="/img/aboutImage.jpg"
              alt="aboutImage"
            />
          </div>
          <div className="myBio">
            <div className="subject">
              <div className="subjectLogo">
                <img
                  className="subjectImg"
                  src="img/html-5-logo-svgrepo-com.svg"
                  alt="html logo"
                />
              </div>
              <div className="bar barOne"></div>
              <span className="percent">90%</span>
            </div>
            <div className="subject">
              <div className="subjectLogo">
                <img
                  className="subjectImg"
                  src="img/css-3-logo-svgrepo-com.svg"
                  alt="css logo"
                />
              </div>
              <div className="bar barTwo"></div>
              <span className="percent">85%</span>
            </div>
            <div className="subject">
              <div className="subjectLogo ">
                <img
                  className="subjectImg jsLogo"
                  src="/img/javascript-logo-svgrepo-com.svg"
                  alt="JS logo"
                />
              </div>
              <div className="bar barThree"></div>
              <span className="percent">90%</span>
            </div>
            <div className="subject">
              <div className="subjectLogo">
                <img
                  className="subjectImg"
                  src="img/reactjs-svgrepo-com.svg"
                  alt="REACT JS"
                />
              </div>
              <div className="bar barFour"></div>
              <span className="percent">70%</span>
            </div>
            <div className="subject">
              <div className="subjectLogo">
                <img
                  className="subjectImg"
                  src="img/bootstrap-4-logo-svgrepo-com.svg"
                  alt="bootStrap"
                />
              </div>
              <div className="bar barFive"></div>
              <span className="percent">80%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
