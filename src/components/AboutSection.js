import React from "react";
import home1 from "../img/front-cartoon.png";
import { About, Description, Image, Hide, Code } from "../styles";
import code1 from "../img/code.png";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Code>
        <img src={code1} alt="code background" />
      </Code>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Daniel Wolanski</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              A <span>Frontend</span> Developer
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any web design or project ideas that you have.
        </motion.p>
        <Link to={"/contact"}>
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Daniel Programming" />
      </Image>
    </About>
  );
};

export default AboutSection;
