import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pags/Home/Home';
import Portifolio from './Pags/Portifolio/Portifolio';
import Sobre from './Pags/Sobre/Sobre';
import Logo from './Img/Logo.png';
import Fashion from './Pags/Eventos/Fashion';
import Footer from './Componentes/Footer';
import Parcerias from './Pags/Parcerias/Parcerias';


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
        <Link className='Disabled' to="#">Parcerias</Link>
        <Link to="/Sobre">Sobre</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portifolio" element={<Portifolio />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Parcerias" element={<Parcerias />} />
          <Route path="/Fashion" element={<Fashion />} />

        </Routes>     
        <Footer/> 
    </Router>
        
    </>
  );
}

export default App;
