import React from "react";
import "../styles/pages/landing.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import LogoImg from "../assets/Logo.svg";
// import { Container } from './styles';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo.</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Ribeirão das Neves</strong>
          <span>Minas Gerais</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
