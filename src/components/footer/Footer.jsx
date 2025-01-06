import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="react-scroll-link"
          >
            Über mich
          </Link>
        </li>
        <li>
          <Link
            to="main2"
            smooth={true}
            duration={500}
            className="react-scroll-link"
          >
            Projekte
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="react-scroll-link"
          >
            Kontakt
          </Link>
        </li>
      </ul>
      <p>© 2024 Spencer Sharp. Alle Rechte vorbehalten.</p>
    </footer>
  );
}

export default Footer;
