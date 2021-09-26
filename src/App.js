import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

import 'animate.css/animate.min.css'

function App() {
  return (
    <div className="App bg-navy font-body">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
