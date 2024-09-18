import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Artisans from "./pages/Artisans";
import Artists from "./pages/Artists";
import Contact from "./pages/Contact";
import Cosplayers from "./pages/Cosplayers";
import Collectors from "./pages/Collectors";
import Merchants from "./pages/Merchants";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/cosplayers" element={<Cosplayers />} />
        <Route path="/collectors" element={<Collectors />} />
        <Route path="/merchants" element={<Merchants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
