import "../Styles/Biography.scss";
import { motion } from "framer-motion";

const Biography = () => {
  const generalMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
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

  const sectionMotion = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        type: "spring",
        stiffness: 100,
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
    <div className="page biography">
      <div className="head">
        <motion.h1
          className="headline"
          variants={headlineMotion}
          initial="hidden"
          animate="visible"
        >
          Biografija
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
            Dr Bojana Todorović, geštalt psihoterapeut i psiholog, završila je
            Master studije na Odeljenju za psihologiju Univerziteta u Beogradu.
            2023. godine odbranila je doktorat iz geštalt psihoterapije u okviru
            Univerziteta na Malti i tako postala prvi geštalt psihoterapeut sa
            ovim zvanjem u Srbiji. Uspešno je završila specijalističke studije
            Geštalt pristup u radu sa Organizacijama. Član je EAGT (European
            Association for Gestalt Therapy) i SUGT (Srpsko Udruženje za Geštalt
            Psihoterapiju) i Istraživačke sekcije u okviru Društva psihologa
            Srbije. Od 2022. godine je učitelj i trener škole Geštalt Studio
            Beograd koju vodi dr Lidija Pecotić. Osim u Srbiji, uključena je u
            programe edukacije budućih geštalt terapeuta u Holandiji u okviru
            Akademije NSG (Nederlandse Stichting Gestalt).
          </motion.p>
          <motion.p variants={pMotion}>
            Osim iskustva u psihoterapijskom radu poseduje i višegodišnje
            iskustvo rada u korporativnom sektoru, kao konsultant i stručnjak za
            razvoj i psihološku podršku zaposlenih. Kako bi znanja iz
            psihologije uspešno primenjivala i u biznis okruženju završila je
            Executive MBA studije na Univerzitetu Sheffield (UK).
          </motion.p>
          <motion.p variants={pMotion}>
            Tokom proteklih godina uspešno je radila sa ljudima iz različitih
            okruženja, različitih uzrasta. Angažovana je kao konsultant u
            oblasti razvoja i psihološke podrške zaposlenima u nekoliko
            internacionalnih kompanija. U Istraživačkoj stanici Petnica kao
            stručni saradnik na seminaru Psihologije stekla je puno iskustva u
            radu sa mladima. Trenutno je savetnik za psihološku podršku u okviru
            međunarodne organizacije School for International Training.
          </motion.p>
          <motion.p variants={pMotion}>
            U privatnoj praksi radi sa individualnim klijentima i grupama. Svoju
            psihoterapijsku praksu stalno usavršava kroz edukaciju, čitanje,
            superviziju i kontakt sa drugim kolegama iz struke.
          </motion.p>
          <motion.p variants={pMotion}>
            Majka je troje dece i u slobodno vreme uživa u sviranju bubnjeva sa
            svojim bendom.
          </motion.p>
        </motion.section>

        <motion.section
          className="two"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <div className="section-cont">
            <div className="left"></div>
            <div className="right">
              <p>
                „Svako od nas poseduje snagu i kapacitet da se suoči sa
                izazovima na svom životnom putu. Smatram da nam je nekada
                potrebna pomoć da ove snage prepoznamo. Verujem da nam u tome
                može pomoći rad na sebi kao jedan od najboljih načina da ojačamo
                ove kapacitete. Odvojiti vreme za istraživanje i rad na sebi
                danas je privilegija. Lično, mislim da je to jedno od
                najdragocenijih iskustava koja svom biću možemo da priuštimo.
              </p>

              <p>
                Kao terapeut nastojim da svojim klijentima pružim mesto u kome
                će se osećati sigurno i podržano da zajedno sa mnom istražuju
                svoje mogućnosti za rast i razvoj“.
              </p>

              <p>
                <span>dr Bojana Todorović</span>
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Biography;
