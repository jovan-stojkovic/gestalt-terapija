import "../Styles/Footer.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const generalMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const pMotion = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imgMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <footer>
      <div className="footer-cont">
        <motion.div
          className="left"
          variants={imgMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
        ></motion.div>
        <motion.div
          className="right"
          variants={generalMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
        >
          <motion.p variants={pMotion}>
            <span>Kontaktirajte me:</span>
          </motion.p>
          <motion.p variants={pMotion}>+381 63 43 00 95</motion.p>
          <motion.p variants={pMotion}>
            gestalt.terapija.bojana@gmail.com
          </motion.p>
          <motion.div className="insta-link" variants={pMotion}>
            <Link
              target="_blank"
              to="https://www.instagram.com/be_gestalt/?next=https%3A%2F%2Fwww.instagram.com%2Fbe_gestalt%2Fp%2FBoOYKUYntq1%2F%3F__coig_restricted%3D1%26__coig_login%3D1"
            >
              @instagram
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
