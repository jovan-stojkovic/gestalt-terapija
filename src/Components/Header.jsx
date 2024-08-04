import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/Header.scss";
import { motion } from "framer-motion";

const Header = ({ showMenu, setShowMenu, toggleMenu }) => {
  const [language, setLanguage] = useState("srb");

  const srbFlag = "/flags/SRB.png";
  const engFlag = "/flags/ENG.png";
  const insta =
    "https://www.instagram.com/be_gestalt/?next=https%3A%2F%2Fwww.instagram.com%2Fbe_gestalt%2Fp%2FBoOYKUYntq1%2F%3F__coig_restricted%3D1%26__coig_login%3D1";

  const generalMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const navlinksMotion = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <header>
      <div className="header-cont">
        <Link className="logo-link" to="/">
          <img src="/icons/logo.svg" alt="logo" className="logo" />
        </Link>
        <motion.nav
          variants={generalMotion}
          initial="hidden"
          animate="visible"
          className={showMenu}
        >
          <div
            className="dark-part"
            onClick={() => {
              setShowMenu("");
            }}
          ></div>
          <div className="nav-content">
            <motion.div variants={navlinksMotion}>
              <NavLink className="navlink" to="/">
                POČETNA
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/sta-je-psihoterapija"
                onClick={() => {
                  setShowMenu("");
                }}
              >
                ŠTA JE PSIHOTERAPIJA?
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/aktuelno"
                onClick={() => {
                  setShowMenu("");
                }}
              >
                AKTUELNO
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/tekstovi"
                onClick={() => {
                  setShowMenu("");
                }}
              >
                TEKSTOVI
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/biografija"
                onClick={() => {
                  setShowMenu("");
                }}
              >
                BIOGRAFIJA
              </NavLink>
            </motion.div>

            <motion.div variants={navlinksMotion}>
              <NavLink
                className="navlink"
                to="/kontakt"
                onClick={() => {
                  setShowMenu("");
                }}
              >
                KONTAKT
              </NavLink>
            </motion.div>

            <Link target="_blank" className="ext-link insta" to={insta}>
              @instagram
            </Link>
            <Link
              target="_blank"
              className="ext-link linkedin"
              to="https://www.linkedin.com/feed/"
            >
              @linkedin
            </Link>
            <button
              className={`language-btn ${language}`}
              onClick={() => setLanguage(language === "srb" ? "eng" : "srb")}
            >
              <img src={language === "srb" ? srbFlag : engFlag} alt="srb" />
              <p>{language === "srb" ? "SRPSKI" : "ENGLISH"}</p>
            </button>
          </div>
        </motion.nav>
        <button
          className={`menu-btn ${showMenu}`}
          onClick={() => setShowMenu(showMenu ? "" : "show")}
        ></button>
      </div>
    </header>
  );
};

export default Header;
