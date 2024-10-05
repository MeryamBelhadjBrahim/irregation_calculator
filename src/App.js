// src/App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Conception from "./Components/Conception";
import GouteAGoute from "./Components/GouteAGoute";
import ParBassin from "./Components/ParBassin";
import Temps from "./Components/Temps";
import Dose from "./Components/Dose";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conception" element={<Conception />} />
        <Route path="/temps" element={<Temps />} />
        <Route path="/dose" element={<Dose />} />
        <Route path="/goutte" element={<GouteAGoute />} />
        <Route path="/bassin" element={<ParBassin />} />
      </Routes>
    </div>
  );
}

export default App;
