import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Apartments from "./components/Apartments";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Apartments />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
