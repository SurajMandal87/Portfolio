import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="content">
      <Header />
      <div className="main_body">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
