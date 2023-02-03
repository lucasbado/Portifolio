import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pags/Home/Home';
import Portifolio from './Pags/Portifolio/Portifolio';
import Sobre from './Pags/Sobre/Sobre';
import Logo from './Img/Logo.png';
import Fashion from './Pags/Eventos/Fashion';
import Footer from './Componentes/Footer';


function App() {
  return (
    <>
    <Router className="Nav__main">
      <nav className='Nav'>
        <Link to="/">Home</Link>
        <Link to="/Portifolio">Portifolio</Link>
        <div className="Nav__img">
          <img src={Logo} alt="" />
        </div>
        <Link to="/contact">Parcerias</Link>
        <Link to="/contact">Sobre</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portifolio" element={<Portifolio />} />
          <Route path="/contact" element={<Sobre />} />
          <Route path="/Fashion" element={<Fashion />} />

        </Routes>     
        <Footer/> 
    </Router>
        
    </>
  );
}

export default App;
