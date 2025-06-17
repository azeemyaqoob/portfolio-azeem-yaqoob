import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { theme } from "./assets/styles/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;