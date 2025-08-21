import { useEffect } from "react";
import { Element } from "react-scroll";
import Navbar from './component/Navbar'
import Intro from './component/Intro'
import Footer from './component/Footer'
import Skills from './component/Skills'
import About from './component/About'

function App() {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="mt-[-80px]">
        <section id="intro">
          <Intro />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
      </div>

      <Element name="contact">
        <Footer />
      </Element>
    </>
  );
}

export default App;

