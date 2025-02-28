import React from "react";
import "../components/Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo à nossa Hamburgueria! 🍔</h1>
          <p>O melhor sabor da cidade em cada mordida.</p>
          <a href="#" className="btn-menu">
            Veja nosso Cardápio
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
