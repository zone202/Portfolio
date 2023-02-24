import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import { AnimateSharedLayout } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <motion.div>
          <motion.h4>Where can I find your resume?</motion.h4>
          <form
            className="answer-btn"
            action="https://docdro.id/2elzxkr"
            method="get"
            target="_blank"
          >
            <button type="submit">Click me</button>
          </form>
          <div className="faq-line"></div>
        </motion.div>
        <motion.div>
          <motion.h4>Where can I find your LinkedIn?</motion.h4>
          <form
            className="answer-btn"
            action="https://www.linkedin.com/in/daniel-wolanski-ab2898231/"
            method="get"
            target="_blank"
          >
            <button type="submit">Click me</button>
          </form>
          <div className="faq-line"></div>
        </motion.div>
        <motion.div>
          <motion.h4>Where can I find your GitHub?</motion.h4>
          <form
            className="answer-btn"
            action="https://github.com/zone202"
            method="get"
            target="_blank"
          >
            <button type="submit">Click me</button>
          </form>
          <div className="faq-line"></div>
        </motion.div>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  background: grey;
  span {
    display: block;
    position: relative;
    z-index: 3;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    position: relative;
    z-index: 3;
    padding-top: 20px;
  }

  button {
    margin-top: 15px;
  }
  .faq-line {
    background: white;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
    position: relative;
    z-index: 3;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    position: relative;
    z-index: 3;
  }
  .answer {
    padding: 2rem 0rem;
    position: relative;
    z-index: 3;
    p {
      padding: 1rem 0rem;
    }
  }

  form.answer-btn {
    position: relative;
    z-index: 3;
  }
`;

export default FaqSection;
