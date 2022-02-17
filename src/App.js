import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import Sumary from "./pages/Scores/components/Sumary";
import Download from "./pages/Scores/components/Download";

import "./App.css";
import { BottomNavigation } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scores from "./pages/Scores";
import "./index.scss";
import FAQs from "./pages/FAQs";
import Cohorts from "./pages/Cohorts"
import About from "./pages/About"
import Applications from "./pages/Applications";
import Find from "./pages/Search"

const Pages = ["first", "home", "second"];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/find" element={<Find />} />
          <Route path="Cohorts" element={<Cohorts />} />
          <Route path="/About" element={<About />} />
          <Route path="/Scores">
            <Route
              path="/Scores/"
              element={<Scores page="/Scores" name="Scores" />}
            />
            <Route
              path="/Scores/SOMALOGIC"
              element={<Scores page="/Scores/SOMALOGIC" name="Proteomics (Somalogic)" />}
            />
            <Route
              path="/Scores/OLINK"
              element={<Scores page="/Scores/OLINK" name="Proteomics (Olink)" />}
            />
            <Route
              path="/Scores/METABOLON"
              element={<Scores page="/Scores/METABOLON" name="Metabolomics (Metabolon)" />}
            />
             <Route
              path="/Scores/Nightingale"
              element={<Scores page="/Scores/Nightingale" name="Metabolomics (Nightingale)" />}
            />
            <Route
              path="/Scores/ILLUMINA_RNASEQ"
              element={
                <Scores page="/Scores/ILLUMINA_RNASEQ" name="Transcriptomics (Illumina RNAseq)" />
              }
            />
          </Route>
        </Routes>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
