import React, {Suspense} from 'react';

import './App.css';
import 'animate.css/animate.min.css'

const Navbar = React.lazy(() => import('./components/Navbar'));
const Home = React.lazy(() => import('./components/sections/Home'));
const About = React.lazy(() => import('./components/sections/About'));
const Skills = React.lazy(() => import('./components/sections/Skills'));
const Projects = React.lazy(() => import('./components/sections/Projects'));
const Contact = React.lazy(() => import('./components/sections/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App bg-navy font-body">
      <Suspense fallback={<div> Cargando...</div>}>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
