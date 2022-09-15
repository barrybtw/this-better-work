import "./App.css";

import Nav from "./lib/Nav";
import Footer from "./lib/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Potato from "./pages/Potato";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/potato" element={<Potato />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
