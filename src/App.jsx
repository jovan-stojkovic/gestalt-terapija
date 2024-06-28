import { Routes, Route } from "react-router-dom";
import "./Styles/App.scss";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import What from "./Pages/What";

const App = () => {
  return <>
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sta-je-psihoterapija" element={<What/>}/>
    </Routes>
  </main>
  </>;
};

export default App;
