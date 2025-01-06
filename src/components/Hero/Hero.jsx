import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import laptopAnimation from "../../../src/animation/laptop.json";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="perent-avatar">
          <img className="avatar" src="./img1.png" alt="profile-image" />
          <span className="icon-verified"></span>
        </div>
        <h3 className="title">
          <span className="key">Willkommen</span> auf meiner Website!
        </h3>
        <p className="sub-title">
          Ich bin ein leidenschaftlicher Entwickler mit einem starken Interesse
          an der Schaffung interaktiver und benutzerfreundlicher digitalen
          Lösungen. Mein Fokus liegt auf der Entwicklung von Websites und
          Anwendungen, die eine großartige Benutzererfahrung bieten. Ich strebe
          danach, innovative und effiziente Lösungen zu finden und mich ständig
          weiterzuentwickeln, um die bestmöglichen Ergebnisse zu erzielen.
        </p>
        <div className="icons flex">
          <a href="https://github.com/SalmaBenyous" className="icon-github" target="_blank"></a>
          <a  href="https://www.linkedin.com/in/salma-benyous-b2397a26b/" className="icon-linkedin-square" target="_blank"></a>
          <a href="https://www.instagram.com/salmabenyous84/" className="icon-instagram" target="_blank"></a>
        </div>
      </div>

      <div className="right-dection animation ">
        <Lottie
          className="animationLaptop"
          style={{ height: "340px" }}
          animationData={laptopAnimation}
        />
      </div>
    </section>
  );
}

export default Hero;
