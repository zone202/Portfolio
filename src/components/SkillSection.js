import React, { useEffect } from "react";
//Import Icons
import Html from "../img/html.png";
import Css from "../img/css-3.png";
import Javascript from "../img/js.png";
import react from "../img/atomic.png";
import wordpress from "../img/wordpress-logo.png";
import php from "../img/php.png";
import mysql from "../img/mysql.png";
import acf from "../img/acf.png";
import bootstrap from "../img/bootstrap.png";
import elementor from "../img/elementor.png";
import woocommerce from "../img/woocommerce.png";
import gsap from "../img/gsap.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";

const SkillSection = () => {
  return (
    <Services>
      <Description data-aos="fade-right" data-aos-duration="1500">
        <h2>
          My <span>Developer</span> Skills
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={Html} alt="" />
              <h3>HTML</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={Css} alt="" />
              <h3>CSS</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={Javascript} alt="" />
              <h3>JavaScript</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={react} alt="" />
              <h3>React/Redux</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={wordpress} alt="" />
              <h3>Wordpress</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={php} alt="" />
              <h3>PHP</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={mysql} alt="" />
              <h3>MySQL</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={acf} alt="" />
              <h3>ACF</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={bootstrap} alt="" />
              <h3>Bootstrap</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={elementor} alt="" />
              <h3>Elementor</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={woocommerce} alt="" />
              <h3>WooCommerce</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={gsap} alt="" />
              <h3>GSAP</h3>
            </div>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }
  p {
    padding: 2rem 0rem 4rem 0rem;
    text-align: center;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    img {
      width: 80px;
    }
  }
`;

export default SkillSection;
