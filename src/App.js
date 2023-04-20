import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Startpage from "./components/startpage";
import RegisterStrukturaPreduzeca from "./components/registerStrukturaPreduzeca";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/register" element={<Startpage />}></Route>
        <Route path="/register/struktura-preduzeca" element={<RegisterStrukturaPreduzeca />} />
      </Routes>
    </div>
  );
}

export default App;
