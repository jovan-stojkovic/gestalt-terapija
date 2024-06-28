import { Routes, Route } from "react-router-dom";
import "./Styles/App.scss";
import Header from "./Components/Header";
import Home from "./Pages/Home";

const App = () => {
  return <>
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </main>
  </>;
};

export default App;
