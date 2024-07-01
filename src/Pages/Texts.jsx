import "../Styles/Texts.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Texts = () => {
  const generalMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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
    <div className="page texts">
      <div className="head">
        <motion.h1
          className="headline"
          variants={headlineMotion}
          initial="hidden"
          animate="visible"
        >
          Tekstovi
        </motion.h1>
      </div>
      <div className="page-cont">
        <motion.section
          className="one"
          variants={generalMotion}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={pMotion}>
            Ovde možete pročitati tekstove koji su vezani za različite teme sa
            kojima se možete sresti tokom psihoterapije. Ukoliko vas interesuje
            da saznate nešto više o navedenim temama, slobodno kontaktirajte
            autorku.
          </motion.p>
        </motion.section>

        <motion.div
          className="text-links"
          variants={generalMotion}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-link-div" variants={pMotion}>
            <Link
              to="/tekstovi/zbog-cega-nam-je-tesko-da-se-obratimo-psihoterapeutu"
              target="_blank"
            >
              Zbog čega nam je teško da se obratimo psihoterapeutu?
            </Link>
          </motion.div>

          <motion.div className="text-link-div" variants={pMotion}>
            <Link
              to="/tekstovi/zasto-psihoterapeut-ne-daje-savete"
              target="_blank"
            >
              Zašto psihoterapeut ne daje savete?
            </Link>
          </motion.div>

          <motion.div className="text-link-div" variants={pMotion}>
            <Link to="/tekstovi/u-trci-za-promenama" target="_blank">
              U trci za promenama
            </Link>
          </motion.div>

          <motion.div className="text-link-div" variants={pMotion}>
            <Link to="/tekstovi/ljubav-navika-psihoterapija" target="_blank">
              Ljubav, navika, psihoterapija
            </Link>
          </motion.div>

          <motion.div className="text-link-div" variants={pMotion}>
            <Link
              to="/tekstovi/psiholoska-podrska-za-zaposlene"
              target="_blank"
            >
              Psihološka podrška za zaposlene - potreba ili mit?
            </Link>
          </motion.div>

          <motion.div className="text-link-div" variants={pMotion}>
            <Link
              to="/tekstovi/kako-se-to-digitalni-svet-mesa-u-nasu-psihologiju"
              target="_blank"
            >
              Kako se to digitalni svet meša u našu psihologiju
            </Link>
          </motion.div>

          <motion.div className="text-link-div" variants={pMotion}>
            <Link
              to="/tekstovi/psiholoska-priprema-za-roditeljstvo"
              target="_blank"
            >
              Psihološka priprema za roditeljstvo
            </Link>
          </motion.div>

          <motion.div className="text-link-div" variants={pMotion}>
            <Link to="/tekstovi/online-savetovanje" target="_blank">
              Online savetovanje - savremena psihološka podrška dostupna svima
            </Link>
          </motion.div>

          <motion.div className="text-link-div" variants={pMotion}>
            <Link
              to="/tekstovi/pustite-kontrolu-napravite-mesta-za-neizvesnost"
              target="_blank"
            >
              Pustite kontrolu, napravite mesta za neizvesnost
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Texts;
