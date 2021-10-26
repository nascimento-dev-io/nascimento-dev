import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ScrolledContext } from "./Context";

function App() {
  return (
    <ScrolledContext>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ScrolledContext>
  );
}

export default App;
