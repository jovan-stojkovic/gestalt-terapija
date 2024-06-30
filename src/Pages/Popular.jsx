import "../Styles/Popular.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Popular = () => {
  const sectionMotionLeft = {
    hidden: {
      opacity: 0,
      x: -200,
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

  const sectionMotionRight = {
    hidden: {
      opacity: 0,
      x: 200,
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
    <div className="page popular">
      <div className="head">
        <motion.h1
          className="headline"
          variants={headlineMotion}
          initial="hidden"
          animate="visible"
        >
          Aktuelno
        </motion.h1>
      </div>
      <div className="page-cont">
        <p className="page-info">
          Ovde možete pratiti aktuelnosti u okviru pružanja psihoterapijskih
          usluga, informisati se o programima koji su u toku ili postaviti
          pitanje Vašem psihoterapeutu. Ukoliko Vam se neki od sadržaja učini
          zanimljivim, slobodno ga podelite sa prijateljima putem društvenih
          mreža ili nam pošaljite Vaš komentar!
        </p>

        <div className="section-flex">
          <motion.section
            variants={sectionMotionLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            <div className="img-cont"></div>
            <h1>Terapija online</h1>
            <p>
              Zahvaljujući novim tehnologijama danas je moguće učestvovati u
              terapijskoj seansi i bez fizičkog dolaska na terapiju. Na
              raspolaganju su različiti programi koji omogućavaju da se terapeut
              i klijent sretnu online, a jedan od najdostupnijih je Skype.
              Klijenti nekada nisu u mogućnosti da putuju daleko ili odvoje
              dovoljno vremena da dođu na terapiju pa je terapija putem Skype-a
              za njih odlična opcija. Seanse online terapije organizuju se pod
              istim uslovima kao i terapije „uživo“ s tim što je poželjno da se
              tokom trajanja terapije klijent i terapeut bar jednom sretnu u
              savetovalištu.
            </p>
            <p>
              Preduslov za online terapiju je dobra internet konekcija kao i
              znanje korišćenja nekog od programa za online sastanke (Skype,
              AppearIn, itd.) Ukoliko smatrate da je online terapija dobro
              rešenje za Vas, informišite se i{" "}
              <Link target="_blank" to="/kontakt">
                zakažite
              </Link>{" "}
              vašu online seansu.
            </p>
          </motion.section>
          <motion.section
            variants={sectionMotionRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            <div className="img-cont"></div>
            <h1>#Antipanik blog</h1>

            <p>
              U davnim danima kada je bilo kakav scenario sličan današnjem bio
              tema razgovora rekla bih za sebe da sam privatno a i profesionalno
              daleko van dometa panike. Danas, kada se sve to dešava uživo,
              osećam da to itekako nije potpuna istina. Kao psiholog i
              psihoterapeut imam potrebu da u ovim danima pomognem ljudima da se
              nose sa vanrednim psihološkim stanjem. Nisam lekar, i osim par
              osnovni informacija o simptomima o Korona virusu, ne znam ništa
              više. Zato ukoliko očekujete informacije o tome kako se zaštiti od
              virusa slobodno guglajte dalje. Ovde želim da se bavim psihološkim
              posledicama koje na sve nas ima proglašenje pandemije. Kliknite na
              naslov teksta da pročitate više...
            </p>
            <div className="blog-link">
              <Link to="/aktuelno/antipanik-blog/vanredno-stanje-iz-ugla-psihologa">
                #Vanredno stanje iz ugla psihologa
              </Link>
            </div>
            <div className="blog-link">
              <Link to="/aktuelno/antipanik-blog/borba-sa-nevidljivim-neprijateljem">
                #Borba sa nevidljivim neprijateljem
              </Link>
            </div>
            <div className="blog-link">
              <Link to="/aktuelno/antipanik-blog/fizicka-ili-socijalna-distanca">
                #Fizička ili socijalna distanca? Jedno bez drugog je moguće
              </Link>
            </div>
            <div className="blog-link">
              <Link to="/aktuelno/antipanik-blog/vreme-je-za-usporavanje">
                #Vreme je za usporavanje
              </Link>
            </div>
            <div className="blog-link">
              <Link to="/aktuelno/antipanik-blog/granica-koja-cuva-zdravlje">
                #Granica koja čuva zdravlje
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Popular;
