import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";


const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className="cursive-text">Tatheer Fathima</h1>
            <ul>
                <li>
                    <a className="menu-item" href="#home">Home</a>
                </li>
                <li>
                    <a className="menu-item" href="#skills">Skills</a>
                </li>
                <li>
                    <a className="menu-item" href="#exp">Experience</a>
                </li>
                <li>
                    <a className="menu-item" href="#projects">Projects</a>
                </li>
                <li>
                    <a className="menu-item" href="#contact">Contact Me</a>
                </li>
                <button className="contact-btn" >
                <a href="https://www.github.com/T-Fathima" target="_blank" rel="noopener noreferrer">Github</a>
                </button>
            </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
