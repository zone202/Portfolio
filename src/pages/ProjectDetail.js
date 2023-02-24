import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ProjectState } from "../projectState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const ProjectDetail = () => {
  const url = useLocation();
  const [projects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url.pathname
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="project" />
          </HeadLine>
          <Awards>
            {project.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={project.secondaryImg} alt="" />
          </ImageDisplay>
          <ScrollTop />
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  padding-top: 20vh;
  position: relative;
  h2 {
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media (max-width: 1000px) {
      height: 100%;
      object-fit: contain;
    }
  }
`;
const Awards = styled.div`
  min-height: 60vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
    text-align: center;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media (max-width: 1000px) {
      height: 100%;
      object-fit: contain;
    }
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      {description}
    </AwardStyle>
  );
};

export default ProjectDetail;
