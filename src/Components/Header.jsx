import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/Header.scss";
import { motion } from "framer-motion";

const Header = () => {
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
        <motion.nav variants={generalMotion} initial="hidden" animate="visible">
          <motion.div variants={navlinksMotion}>
            <NavLink className="navlink" to="/">
              POČETNA
            </NavLink>
          </motion.div>

          <motion.div variants={navlinksMotion}>
            <NavLink className="navlink" to="/sta-je-psihoterapija">
              ŠTA JE PSIHOTERAPIJA?
            </NavLink>
          </motion.div>

          <motion.div variants={navlinksMotion}>
            <NavLink className="navlink" to="/aktuelno">
              AKTUELNO
            </NavLink>
          </motion.div>

          <motion.div variants={navlinksMotion}>
            <NavLink className="navlink" to="/tekstovi">
              TEKSTOVI
            </NavLink>
          </motion.div>

          <motion.div variants={navlinksMotion}>
            <NavLink className="navlink" to="/biografija">
              BIOGRAFIJA
            </NavLink>
          </motion.div>
          
          <motion.div variants={navlinksMotion}>
            <NavLink className="navlink" to="/kontakt">
              KONTAKT
            </NavLink>
          </motion.div>

          <Link target="_blank" className="ext-link insta" to={insta}></Link>
          <Link target="_blank" className="ext-link linkedin" to="linkedin.com"></Link>
          <button
            className={`language-btn ${language}`}
            onClick={() => setLanguage(language === "srb" ? "eng" : "srb")}
          >
            <img src={language === "srb" ? srbFlag : engFlag} alt="srb" />
          </button>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
