import { Routes, Route } from "react-router-dom";
import "./Styles/App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import What from "./Pages/What";
import Biography from "./Pages/Biography";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sta-je-psihoterapija" element={<What />} />
          <Route path="/biografija" element={<Biography />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;
