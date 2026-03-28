import React, { Suspense } from "react";
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

const ParticleBackground = React.lazy(() =>
  import("./components/ParticleBackground")
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
