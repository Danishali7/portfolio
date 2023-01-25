import React, { useEffect } from "react";
import "../css/navbar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  function toHandleScroll() {
    let scroll = window.scrollY;
    let header = document.querySelector(".header");
    let headerHeight = header.getBoundingClientRect().height;
    if (scroll > headerHeight) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }
  // when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", toHandleScroll);
  }, []);

  // function for toggle menu
  const toggleMenu = () => {
    let navLinks = document.querySelector(".navLinks");
    navLinks.classList.add("toggleMenu");
  };
  const closeMenu = () => {
    let navLinks = document.querySelector(".navLinks");
    navLinks.classList.remove("toggleMenu");
    console.log(" i m rendered");
  };

  // const scrollToAbout = () => {};
  return (
    <header className="header">
      <img className="navLogo" src="/img/danishLogo.png" alt="Logo" />
      <button className="hamBtn" onClick={toggleMenu}>
        <FaBars className="hamMenu" />
      </button>
      <ul className="navLinks">
        <IoClose className="closeMenu" onClick={closeMenu} />
        <li>
          <Link smooth duration={500} to="heroSec" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link smooth duration={500} to="aboutSec" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link smooth duration={500} to="projectSection" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link smooth duration={400} to="contactFormCont" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
