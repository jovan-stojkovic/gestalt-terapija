import "../Styles/What.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const What = () => {
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
    <div className="page what">
      <div className="head">
        <motion.h1
          className="headline"
          variants={headlineMotion}
          initial="hidden"
          animate="visible"
        >
          Šta je psihoterapija?
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
            Psihoterapija je aktivan proces u kome klijent i trapeut zajedno
            istražuju teme sa kojima dolazi klijent. Terapeut i klijent
            razgovaraju o klijentovoj prošlosti i sadašnjosti, tragajući za
            načinima na koje klijent može da prevaziđe svoj problem. Tokom ovog
            procesa terapeut pruža podršku klijentu da razvije svoje snage,
            istraži prepreke i samostalno se suoči sa svojim problemom. Cilj
            terapije je da u budućnosti klijent može sam da pronađe uspešnu
            strategiju prevazilaženja svojih problema. Terapija će biti uspešna
            samo ako je klijent motivisan da radi na svojim temama i ako je
            odnos između klijenta i terapeuta iskren. Proces rada u
            psihoterapiji nekada znači da će se klijent suočiti i sa svojim
            neprijatnim emocijama - ljutnjom, tugom, krivicom, kako bi došao do
            uvida koji će zaista doneti promenu u njegov život. Takođe,
            psihoterapijski rad nosi i uzbuđenje zbog sticanja novih uvida kao i
            osećanja sreće, ponosa i zadovoljstva usled promena koje se
            dešavaju.
          </motion.p>
          <motion.p variants={pMotion}>
            Psihoterapijski susret traje 50 minuta i odvija se u prijatnom
            ambijentu psihološkog savetovališta. Na razgovoru su prisutni samo
            terapeut i klijent i potpuna privatnost i poverljivost su
            zagarantovani. Tokom prvog susreta terapeut i klijent se upoznaju,
            klijent iznosi svoja očekivanja i zajedno definišu cilj, dinamiku i
            načini rada. Najčešći tempo viđanja je jednom nedeljno, međutim
            dinamika zavisi i od teškoća sa kojima klijent dolazi. Pristup
            svakom klijentu je individualan, zato ne postoji planiran tok
            terapije, već ga zajedno stvaraju klijent i terapeut.
          </motion.p>
        </motion.section>

        <motion.section
          className="two"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8, once: true }}
        >
          <h2>Geštalt psihoterapija</h2>
          <div className="section-cont">
            <div className="left">
              <p>
                Postoje mnogi psihoterapijski pravci koji se razlikuju po
                teorijskoj pozadini, načinu rada sa klijentom i tehnikama koje
                terapeut koristi. Više o istorijskom nastanku Geštalt terapije
                možete pročitati{" "}
                <Link
                  target="_blank"
                  to="https://sr.wikipedia.org/sr/%D0%93%D0%B5%D1%88%D1%82%D0%B0%D0%BB%D1%82_%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D0%B8%D1%98%D0%B0"
                >
                  ovde
                </Link>
                .
              </p>

              <p>
                Geštalt pristup u psihoterapijskom radu usmeren je na povećanje
                klijentove svesnosti o onome što oseća i radi u kontaktu sa
                sobom i okolinom. Terapeut ne daje interpretacije već zajedno sa
                klijentom istražuje i razumeva njegovo jedinstveno iskustvo.
                Geštalt psihoterapija orijentisana je na ono što se dešava u
                trenutku „sada i ovde“, ali uvažavajući kontekst prošlih
                iskustava klijenta. Nakon što se pažnja klijenta usmeri na
                sadašnje doživljaje, na površinu mogu isplivati konflikti koji
                su do tada bili u pozadini a koji tada postaju rešivi. Čovek se
                smatra zdravim ukoliko je sposoban da bude autentičan u svom
                odnosu sa sobom i sredinom, kao i sposoban da vrši odgovorne
                izbore u svom životu.
              </p>

              <p>
                Geštalt pristup fokus stavlja na odnos klijenta i terapeuta,
                zato je veoma važno da on bude iskren, otvoren i sa obostranim
                poverenjem. U toku rada koriste se mnogi kreativni pristupi koji
                imaju za cilj da povećaju klijentovu svesnost. Klijent postavlja
                cilj terapije a zajedno sa klijentom definiše se put do njegovog
                ostvarenja, u skladu sa temama koje klijent donosi na terapiju.
              </p>
            </div>
            <div className="right"></div>
          </div>
        </motion.section>

        <motion.section
          className="three"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8, once: true }}
        >
          <h2>Kada na psihoterapiju?</h2>
          <p>
            Polje delovanja psihoterapije veoma je široko, što ostavlja
            mogućnost terapeutu i klijentu da rade na velikom broju tema.
          </p>

          <p>
            Treba znati da za razliku od psihijatra, psihoterapeut nije u
            mogućnosti da pripiše lekove za medicinski tretman teškoća. U
            slučajevima da postoji takva potreba, psihoterapeut radi u
            konsultaciji sa timom stručnjaka koji su potrebni da bi se klijent
            zbrinuo na odgovarajući način. Pogledajte koje su najčešće teškoće
            sa kojima se možete obratiti psihoterapeutu.
          </p>

          <p>
            Ukoliko vaša potreba nije među dole navedenim, slobodno me možete
            kontaktirati da zajedno procenimo da li je psihoterapija dobra
            opcija za Vas.
          </p>

          <ul>
            <li>Radoznalost za istraživanjem i upoznavanjem sebe</li>
            <li>Teškoće u porodičnim odnosima</li>
            <li>Teškoće u partnerskom odnosu</li>
            <li>Zastoji u razvoju karijere i profesionalnim odnosima</li>
            <li>Teškoće u učenju</li>
            <li>
              Promene životnih uloga - promena škole, polazak na fakultet,
              roditeljstvo, stupanje u brak, penzionisanje i drugo
            </li>
            <li>Nedostatak motivacije i samopouzdanja</li>
            <li>
              Nesanica, glavobolje, učestali fizički simptomi bez medicinskog
              objašnjenja
            </li>
            <li>Depresivnost, anksioznost i različita neurotska stanja</li>
            <li>
              Preživljena trauma: psihičko i/ili fizičko zlostavljanje,
              ugroženost, lična ili ugroženost bliskih osoba, članova porodice,
              zdravstveni problemi, smrt bliske osobe, nasilje u porodici ili
              drugi oblici nasilja, nesrećni slučajevi, gubitak materijalne
              sigurnosti, ratne okolnosti ili elementarne nepogode i drugo
            </li>
            <li>
              Stres - osećaj da ne možemo da se nosimo sa zahtevima i
              očekivanjima koji su pred nama. Stres može biti uzrokovan
              različitim događajima, a neki od njih mogu biti intenzivne promene
              u porodičnim ili partnerskim odnosima ili na poslovnom planu
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="four"
          variants={sectionMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8, once: true }}
        >
          <h2>Utisci klijenata</h2>
          <div className="section-cont">
            <div className="left"></div>
            <div className="right">
              <p>
                "Početak rada sa Bojanom za mene je predstavio novi početak, ali
                i nastavak ličnog rasta i razvoja. Kroz brojne susrete, koji su
                sa sobom nosili mnogo podrške, razumevanja, radosti, strepnje,
                tuge, topline i stida, shvatila sam da je ovo bio težak ali i
                uzbudljiv put. Put koji mi je pomogao da duboko skrivene obrasce
                ponašanja, mehanizme odbrane i emocije osvestim i postanem
                spremnija, jača, sigurnija i borbenija za nove početke i
                saznanja" - Jovana, 23 godine
              </p>

              <p>
                "Imala sam priliku da kroz naše susrete naučim toliko toga novog
                o sebi. Nekada me je to radovalo a ponekad i zbunjivalo - ipak
                uvek sam bila sigurna da sam u terapiji na putu ka nečem što je
                mnogo bolje od onoga što sam do tada imala. Uspela sam da
                ostvarim svoj početni cilj, ne samo jedan već i više njih.
                Terapija je bila divno iskustvo." - Sandra, 32 godine
              </p>

              <p>
                "It is my pleasure to recommend Bojana after having the chance
                to work with her for the past year. Given that our company is
                international, Bojana's understanding of cultural differences
                and knowledge of English language were a welcome asset to our
                team. She quickly adapted to the atmosphere of the company,
                which, together with her remarkable communication skills,
                allowed her to work very well with her U.S. clients. Since she
                was working in a remote environment, it was very helpful to us
                that she was always prompt to answer and present when
                necessary." - Andrew Sachs, CEO @ Nobel Coaching
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default What;
