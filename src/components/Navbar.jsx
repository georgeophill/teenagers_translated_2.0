import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import PeopleLeft from "../assets/images/people-left.png";
import PeopleRight from "../assets/images/people-right.png";
import { useState, useEffect } from "react";
import { links } from "../data";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const MOBILE_BREAKPOINT = 1230;
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= MOBILE_BREAKPOINT);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar" id="navbar">
      <div className="navbar__top">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo">
            <img src={PeopleLeft} alt="logo" />
          </Link>
        </div>
        <div className="navbar__center">
          <div className="navbar__item">
            <Link to="/" className="navbar__link">
              Teenagers Translated
            </Link>
          </div>
        </div>
        <div className="navbar__right">
          {isResponsive ? (
            <div className="hamburger-icon" onClick={toggleDropdown}>
              {isDropdownOpen ? <RxCross1 className="close-icon" /> : "☰"}
            </div>
          ) : (
            <Link to="/" className="navbar__logo">
              <img src={PeopleRight} alt="logo" />
            </Link>
          )}
        </div>
      </div>
      {isResponsive && (
        <div className={`mobile-dropdown ${isDropdownOpen ? "open" : ""}`}>
          <ul className="nav__links">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={toggleDropdown}>
                  <div className="nav__link-content"> {link.name} </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="navbar__bottom">
        <div className="btn-nav">
          <Link to="/">Home</Link>
        </div>
        {/* <div className="btn-nav">
          <Link to="/about">About</Link>
        </div> */}
        <div className="btn-nav dropdown">
          <span className="dropdown-title">
            <Link to="/parentWork">Parent Work</Link>
          </span>
          <div className="dropdown-content">
            <Link to="/parentAboutTalks">About Talks</Link>
            <Link to="/parentLunch">Workplace</Link>
            <Link to="/parentTalks">Schools</Link>
            <Link to="/parentCharity">Charity</Link>
          </div>
        </div>
        <div className="btn-nav dropdown">
          <span>
            <Link to="/schoolWork">School Work</Link>
          </span>
          <div className="dropdown-content">
            <Link to="/studentWork">Student PSHE</Link>
            <Link to="/staffInputs">Staff Inputs</Link>
            <Link to="/schoolCulture">Wellbeing Culture</Link>
          </div>
        </div>
        <div className="btn-nav dropdown">
          <span>
            <Link to="/coaching">1-2-1 Coaching</Link>
          </span>
          <div className="dropdown-content">
            <Link to="/coachingForParents">Parents</Link>
            <Link to="/coachingForTeenagers">Teenagers </Link>
          </div>
        </div>
        <div className="btn-nav">
          <Link to="/ourBook">Our Book</Link>
        </div>
        <div className="btn-nav">
          <Link to="/resources">Resources</Link>
        </div>
        <div className="btn-nav">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
