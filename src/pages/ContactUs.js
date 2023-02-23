import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("myyawvkk");
  if (state.succeeded) {
    return <Emailp>Thanks for the Message!</Emailp>;
  }
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <form className="EmailForm" onSubmit={handleSubmit}>
        <label
          variants={titleAnim}
          data-aos="fade-right"
          data-aos-duration="1500"
          htmlFor="name"
        >
          Name:{" "}
        </label>
        <input id="name" type="name" name="name" />
        <label
          variants={titleAnim}
          data-aos="fade-right"
          data-aos-duration="1500"
          htmlFor="email"
        >
          Email Address:{" "}
        </label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Message: " />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button variants={titleAnim}
        data-aos="fade-right"
        data-aos-duration="1500" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </ContactStyle>
  );
}
function ContactUs() {
  return <ContactForm />;
}

const ContactStyle = styled(motion.div)`
  padding: 15rem 30rem;
  color: #353535;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    padding: 15rem 2rem;
  }
`;

const Emailp = styled.div`
  font-size: 6rem;
  padding-top: 200px;
  text-align: center;
  color: white;
`;

export default ContactUs;
