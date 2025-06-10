import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="p-0 mx-0 my-0 overflow-hidden App">
      {/* Navbar and sections */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contributions />
      <Contact />
    </div>
  );
}

export default App;
