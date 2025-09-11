import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import DissmilisOnsker from "./components/projects/DissimilisOnsker";
import Skumring from "./components/projects/Skumring";
import Veles from "./components/projects/Veles";
import ExperisOnsker from "./components/projects/ExperisOnsker";
import DissimilisDesignsystem from "./components/projects/DissimilisDesingsystem";

// Komponent for å håndtere scroll til toppen ved ruteendring
const ScrollToTop = () => {
  const location = useLocation(); // Dette fungerer nå fordi vi er innenfor Router

  useEffect(() => {
    // Når ruten endres, ruller vi automatisk til toppen
    window.scrollTo(0, 0);
  }, [location]); // Når location endres (ny rute), vil vi rulle til toppen

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Denne linjen håndterer scroll til toppen */}
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dissimilisonsker" element={<DissmilisOnsker />} />
          <Route path="/skumring" element={<Skumring />} />
          <Route path="/veles" element={<Veles />} />
          <Route path="/experisonsker" element={<ExperisOnsker />} />
          <Route
            path="/dissimilisdesignsystem"
            element={<DissimilisDesignsystem />}
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

/*
import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';



const App = () => {
  return (
    <>
    <Header />
    <main className= "main">
      <Home/>
      <About/>
      <Portfolio/>
      <Contact />

    </main>
    </>
  )
}

export default App
*/
