import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import sweater from "../img/Sweater-pic1.jpg";
import photography from "../img/photography-pic1.jpg";
import gameon from "../img/gameon-pic1.jpg";
import codecourses from "../img/codecourses-pic1.jpg";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  lineAnim,
  slider,
  sliderContainer,
  titleAnim,
} from "../animation";
import ScrollTop from "../components/ScrollTop";

const MyProjects = () => {
  return (
    <Projects
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Sweater Shop</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/projects/sweater-shop"}>
          <Hide>
            <motion.img variants={fade} src={sweater} alt="sweater" />
          </Hide>
        </Link>
      </Project>
      <Project
        variants={titleAnim}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h2>Photography.</h2>
        <div className="line"></div>
        <Link to={"/projects/photography"}>
          <img src={photography} alt="photography" />
        </Link>
      </Project>
      <Project
        variants={titleAnim}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h2>GameOn</h2>
        <div className="line"></div>
        <Link to={"/projects/game-on"}>
          <img src={gameon} alt="gameon" />
        </Link>
      </Project>
      <Project
        variants={titleAnim}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h2>Code Courses</h2>
        <div className="line"></div>
        <Link to={"/projects/codecourses"}>
          <img src={codecourses} alt="gameon" />
        </Link>
      </Project>
      <ScrollTop />
    </Projects>
  );
};

const Projects = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 10rem 10rem;
  @media (max-width: 1000px) {
    padding: 20rem 0rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: white;
    text-align: center;
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: white;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    transition: all 1s ease;
    &:hover {
      transform: scale(0.8);
    }
    @media (max-width: 1000px) {
      object-fit: contain;
      height: 100%;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 5;
`;

const Frame2 = styled(Frame1)`
  background: #00b2f8;
`;

const Frame3 = styled(Frame1)`
  background: gray;
`;

const Frame4 = styled(Frame1)`
  background: #04ffb4;
`;

export default MyProjects;
