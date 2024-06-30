import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/Blog.scss";

const BlogOne = () => {
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
    <>
      <div className="page blog">
        <div className="head">
          <motion.h1
            className="headline"
            variants={headlineMotion}
            initial="hidden"
            animate="visible"
          >
            Vanredno stanje iz ugla psihologa
          </motion.h1>
        </div>
        <div className="page-cont">
          <p className="blog-text">
            Vanredno stanje naše duše počelo je mnogo pre vanrednog stanja koje
            je proglašeno u državi. Ono što je posebno uznemiravajuće jeste
            brzina kojom se stvari menjaju. Osećaj sigurnosti i unutrašnji mir
            koji smo imali koliko u prošloj nedelji gubio se iz dana u dan.
            Okidač je za svakog od nas bio drugačiji. Ljudi koji se maramicama
            drže za rukohvate u autobusu. Komšinica koja rukavicama otvara vrata
            zgrade. Poslednja kutija mlevene Plazme u prodavnici i osećaj da,
            kada ste je uzeli, kao da ste osvojili najveću pobedu u tom danu.
            Vreme je da pored medicinske zaštite, počnemo da ozbiljno razmišljam
            o posledicama koje će ovakvo stanje ostaviti na našu psihu.
          </p>

          <div className="img-text one">
            <div className="img-cont"></div>
            <div className="text-part">
              <p className="blog-text">
                Po definiciji, anksioznost je neprijatno stanje strepnje,
                odnosno strašljivog isčekivanja da će se nešto loše desiti.
                Osoba očekuje neku opasnost i ima doživljaj da neće moći da se
                zaštiti od te opasnosti ili da će teško podnositi njene
                posledice. Situacija sa širenjem Korona virusa podržava sve naše
                unutrašnje mehanizme koji mogu da proizvedu osećaj anksioznosti.
              </p>
              <p className="blog-text">
                Pre svega gubimo osećaj sigurnosti koji smo imali kroz stalni
                životni ritam - posao, školu, vrtić, obaveze, druženja, radne
                dane, neradne dane. Vanredne okolnosti donose mnogo slobodnog
                vremena a malo strukture i taj poremećaj ravnoteže uznemirava
                sve one koji su navikli da budu uposleni. Zato je važno
                uspostaviti ponovo jedan novi životni ritam, uz strukturu koja
                je moguća. Planirati vreme u okviru prostora koji nam je dat.
                Veoma je važno vratiti osećaj smisla situaciji u kojoj se
                nalazimo. Okrenite se stvarima koje ste do sada zapostavili -
                razgovori, čitanje knjiga, sređivanje stana, pisanje, itd.
              </p>
            </div>
          </div>

          <p className="blog-text">
            Jedna od osnovnih podrški zdravom psihičkom životu jesu socijalni
            kontakti. Postepena izolacija usled širenja virusa nažalost odnosi
            se na ukidanje upravo ove važne psihološke podrške - kontaktu sa
            drugim ljudima. Svi oni koji su bili zagovornici digitalnih
            društvenih platformi kao zamene za živ kontakt sada mogu sa pravom
            da kažu da ovaj način druženja postaje neophodan. Održavajte
            kontakte na bilo koji dostupan način, internet je moćna mreža koja u
            ovom trenutku predstavlja značajn alat psihološke podrške.
          </p>
          <div className="img-text two">
            <div className="text-part">
              <p className="blog-text">
                Naš um je sposoban da predvidi najgore ishode. Nekada smo
                obuzeti takvim predviđanjima i teško nam je da vidimo pozitivnu
                stranu sadašnje situacije. Porodice su ponovo zajedno. Deca će
                biti uz svoje roditelje. Svi umorni od posla malo će se
                odmoriti. Ljudi će morati da razgovaraju i budu u kontaktu jedni
                sa drugima. Priroda će nastaviti da živi, neometena. Nazire se
                novi prostor za razvoj kreativnog mišljenja, prisutnosti,
                pažnje, interesovanja...
              </p>

              <p className="blog-text">Nastaviće se...</p>
            </div>
            <div className="img-cont"></div>
          </div>

          <p className="blog-text">
            Ukoliko osećate usamljeno i potrebna vam je psihološka podrška u
            ovim danima možete me kontaktirati na email adresu{" "}
            <span>gestalt.terapija.bojana@gmail.com</span> ili posetiti stranicu{" "}
            <Link to="/">www.gestalt-terapija.rs</Link> i informisati se o
            mogućnostima koje nudi psihoterapija.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogOne;
