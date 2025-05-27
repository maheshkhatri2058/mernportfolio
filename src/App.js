import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import './App.css';
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import Project from './components/Project';
import { Skills } from "./components/Skills";

function App() {
  AOS.init();
    return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
