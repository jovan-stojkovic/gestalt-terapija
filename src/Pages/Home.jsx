import "../Styles/Home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
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
    <div className="page home">
      <div className="head">
        <motion.h1
          className="headline"
          variants={headlineMotion}
          initial="hidden"
          animate="visible"
        >
          Dobrodošli!
        </motion.h1>
      </div>
      <div className="page-cont">
        <section className="one">
          <motion.div
            className="left"
            variants={generalMotion}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={pMotion}>
              Dobrošli na <Link to="/">www.gestalt-terapija.rs</Link>
            </motion.p>
            <motion.p variants={pMotion}>
              Sajt vodi dr{" "}
              <Link to="/biografija" target="_blank">
                Bojana Todorović
              </Link>
              , psiholog i geštalt psihoterapeut.
            </motion.p>
            <motion.p variants={pMotion}>
              Na ovom mestu možete saznati{" "}
              <Link to="/sta-je-psihoterapija" target="_blank">
                više o psihoterapiji
              </Link>
              , pročitati korisne{" "}
              <Link to="/tekstovi" target="_blank">
                tekstove
              </Link>{" "}
              o temama koje Vas zanimaju ili se informisati o{" "}
              <Link to="/aktuelno" target="_blank">
                aktuelnim
              </Link>{" "}
              programima.
            </motion.p>
            <motion.p variants={pMotion}>
              Možete se raspitati ili{" "}
              <Link to="/kontakt" target="_blank">
                zakazati termin
              </Link>{" "}
              kod svog psihoterapeuta ili postaviti pitanje vezano za Vaš
              problem.
            </motion.p>
            <motion.p variants={pMotion}>
              Želim Vam uspešan lični rast i boravak u svetu psihoterapije!
            </motion.p>
            <motion.p variants={pMotion}>dr Bojana Todorović</motion.p>
          </motion.div>
          <motion.div
            className="right"
            variants={imgMotion}
            initial="hidden"
            animate="visible"
          ></motion.div>
        </section>

        <motion.section
          className="two"
          variants={generalMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <h2>Usluge psihološke podrške</h2>
          <motion.p variants={pMotion}>
            U trenucima u kojima Vam je potrebna podrška za prevazilaženje
            životnih zastoja ili ako samo želite da osnažite sebe, možete se
            odlučiti za jedan od nekoliko vidova psihološke podrške:
          </motion.p>

          <motion.p variants={pMotion}>
            <span>Psihoterapija</span> - proces u kome psihoterapeut pomaže
            klijentu da osvesti i ojača svoje kapacitete za suočavaje sa
            poteškoćama zbog kojih dolazi na terapiju. Terapija je razgovor koji
            traje oko 50 minuta, a najčešće je ritam susreta jednom nedeljno.
            Psihoterapija je dugotrajniji proces, omogućava dublje sagledavanje
            svih aspekata problema i istorije njegovog nastanka, dovodeći do
            dubljih uvida u ličnost i pogled na svet. Psihoterapija može biti
            individualna i grupna.{" "}
            <Link
              to="/sta-je-psihoterapija/kada-na-psihoterapiju"
              target="_blank"
            >
              Ovde
            </Link>{" "}
            možete videti neke od teškoća kojima se možemo baviti na
            psihoterapiji.
          </motion.p>

          <motion.p variants={pMotion}>
            <span>Savetovanje i koučing</span> – Za razliku od psihoterapije,
            savetovanje i koučing su najčešće usmereni na neki konkretan problem
            manjih razmera pa samim tim traju kraće od terapije. Metod je u
            većoj meri praktičan i fokusiran na konkretno pitanje i na
            specifičnosti problema. U slučajevima kada Vam je potrebna
            konsultacija, imate mogućnost da dobijete mišljenje o temama kao što
            su roditeljstvo, vaspitanje, profesionalni razvoj, planiranje
            karijere, itd. Koučing podrazumeva rad na konkretnom problemu sa
            ciljem da se dođe do rešenja koje je u tom trenutku optimalno za
            klijenta. Najčešće teme su: stres na poslu, planiranje ili promena
            karijere, promena stila života, itd.
          </motion.p>

          <motion.p variants={pMotion}>
            <span>Programi po meri</span> – U slučajevima kada postoji potreba
            da grupa ljudi usvoji neku veštinu, radi zajedno na rešavanju nekog
            problema ili postoji potreba za pružanjem specifične psihološke
            podrške moguće je organizovati trening ili radionicu na određenu
            temu. Najčešće teme koje se obrađuju o okviru ovih programa su:
            asertivnost, komunikacija, timski rad, motivacija, konflikti, stres,
            liderstvo, priprema za brak i roditeljstvo, itd...
          </motion.p>

          <motion.p variants={pMotion}>
            <span>
              Sve usluge je pored srpskog, moguće izvesti i na engleskom jeziku.
            </span>
          </motion.p>

          <motion.div className="img-cont" variants={pMotion}></motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
