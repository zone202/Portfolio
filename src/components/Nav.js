import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoPic from "../img/logo.png";
import GlobalStyle from "./GlobalStyle";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link id="Logo" to="/">
        <img className="logoNav" src={logoPic} alt="logo picture" />
      </Link>
      <nav ref={navRef}>
        <li onClick={showNavBar}>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "8%" : "0%" }}
          />
        </li>
        <li onClick={showNavBar}>
          <Link to="/projects">My Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "12%" : "0%" }}
          />
        </li>
        <li onClick={showNavBar}>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "12%" : "0%" }}
          />
        </li>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default Nav;
