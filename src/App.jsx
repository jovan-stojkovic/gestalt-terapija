import "./Styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import What from "./Pages/What";
import Biography from "./Pages/Biography";
import Contact from "./Pages/Contact";
import Popular from "./Pages/Popular";
import BlogOne from "./Blogs/BlogOne";
import Texts from "./Pages/Texts";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <>
      <main>
        <Header
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          toggleMenu={toggleMenu}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sta-je-psihoterapija" element={<What />} />
          <Route path="biografija" element={<Biography />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="aktuelno" element={<Popular />} />
          <Route
            path="aktuelno/antipanik-blog/vanredno-stanje-iz-ugla-psihologa"
            element={<BlogOne />}
          />
          <Route path="tekstovi" element={<Texts />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;
