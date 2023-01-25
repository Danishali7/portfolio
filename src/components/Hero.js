import React from "react";
import "../css/hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="heroSec">
      <div className="leftSec">
        <h1 className="mainHeading"> DANISH ALI</h1>
        <p className="about">
          Hi , this is my official portfolio Website to show all details and
          skills of web development !
        </p>
        <Link to="contactFormCont">
          <button className="contactBtn btn">CONTACT ME</button>
        </Link>
      </div>
      <img className="profImage" src="/img/cristiano.jpg" alt="ProfileImage" />
    </section>
  );
};

export default Hero;
