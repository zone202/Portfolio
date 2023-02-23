import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 10rem 0rem 10rem;
  color: white;
  flex-direction: column;
  button {
    font-size: 30px;
  }
  @media (max-width: 700px) {
    min-height: 120vh;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  margin-top: 150px;
  h2 {
    font-weight: lighter;
    text-align: center;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
    object-fit: cover;
    @media (max-width: 500px) {
      width: 300px;
    }
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;

export const Code = styled.div`
  img {
    position: fixed;
    left: 0;
    z-index: 1;
    overflow: hidden;
    opacity: 0.3;
    @media (max-width: 850px) {
      right: -100px;
      left: -100px;
    }
  }
`;
