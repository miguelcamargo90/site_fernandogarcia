import React from 'react';
import Navbar from './components/Navbar';
import Projects from "./components/Projects";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router} from "react-router-dom";
// Importe outros componentes conforme necessário


export default function App() {

  return (
    <Router>
    <main className="text-gray-400 bg-yellow-900 body-font" >
      <Navbar />
        <React.Fragment>
            <About />
            
            <Products />
            <Projects />
            <Contact />
        </React.Fragment>
    </main>
  </Router>
  );
}
