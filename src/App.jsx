import React from 'react';
import Header from '../src/Components/Header/Header'
import Nav from '../src/Components/Nav/Nav'
import About from '../src/Components/About/About'
import Education from '../src/Components/Education/Education'
import Experience from '../src/Components/Experience/Experience'
import Skills from '../src/Components/Skills/Skills'
import Projects from '../src/Components/Projects/Projects'
import Contact from '../src/Components/Contact/Contact'
import Footer from '../src/Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
