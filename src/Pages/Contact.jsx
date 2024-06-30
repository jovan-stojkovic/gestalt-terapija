import "../Styles/Contact.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
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
      x: -300,
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

  const headlineMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="page contact">
      <div className="head">
        <motion.h1
          className="headline"
          variants={headlineMotion}
          initial="hidden"
          animate="visible"
        >
          Kontakt
        </motion.h1>
      </div>
      <div className="page-cont">
        <p className="info">
          Informišite se o svemu što Vas zanima ili zakažite susret sa svojim
          terapeutom. Seanse se održavaju u savetovalištu ili online u unapred
          zakazanim terminima. <span>dr Bojana Todorović</span>
        </p>
        <div className="contact-flex">
          <div className="left">
          </div>
          <div className="right">
            <div className="cont-part">
              <div className="img"></div>
              <p className="contact-p">+381 63 43 00 95</p>
            </div>
            <div className="cont-part">
              <div className="img"></div>
              <p className="contact-p">gestalt.terapija.bojana@gmail.com</p>
            </div>
            <div className="cont-part">
              <div className="img"></div>
              <p className="contact-p">Kralja Milutina 46, Beograd</p>
            </div>
            <div className="cont-part">
              <div className="img"></div>
              <p className="contact-p">ponedeljak-petak, 9-21h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
