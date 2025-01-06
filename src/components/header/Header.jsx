import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
function Header() {
  const [showModel, setShowModel] = useState(false);
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.remove("light");
    } else if (mode === "dark") {
      document.body.classList.remove("light");
      document.body.classList.remove("dark");
    }
    document.body.classList.toggle(mode);
  }, [mode]);
  const handleScroll = () => {
    const element = document.getElementById('main2');
    if (element) {
      console.log('Found the element!', element);
    } else {
      console.error('Element not found!');
    }
  };
  return (
    <header className="flex">
      <button
        id="menuList"
        style={{ cursor: "pointer" }}
        onClick={() => setShowModel(!showModel)}
      >
        <span className="icon-menu"></span>
      </button>
      <nav>
        <ul className="flex">
          <li>
            <Link to="hero" smooth={true} duration={500} className="react-scroll-link">
              Über mich
            </Link>
          </li>
          <li>
            <Link to="main2" smooth={true} duration={500} onClick={handleScroll} className="react-scroll-link">
              Projekte
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="react-scroll-link">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            mode === "dark" ? "light" : "dark"
          );
          setMode(localStorage.getItem("currentMode"));
        }}
        style={{ cursor: "pointer" }}
        className={mode === "light" ? " icon-sun" : "icon-moon-o"}
      ></button>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                onClick={() => setShowModel(!showModel)}
                className="icon-close"
              ></button>
            </li>
            <li>
              <Link to="hero" smooth={true} duration={500} className="react-scroll-link">
                Über mich
              </Link>
            </li>
            <li>
              <Link to="main2" smooth={true} duration={500} className="react-scroll-link">
                Projekte
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="react-scroll-link">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
