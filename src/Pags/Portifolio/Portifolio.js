import React from "react";
import Cards from "../../Componentes/Cards";
import "./Portifolio.css";
import Fash from "../../Img/Fashion.jpg";
import Evento from "../../Img/Eventos.jpg";
import bkg from "../../Img/BkgPort.jpg"
import { SlArrowDown } from "react-icons/sl";
import Footer from "../../Componentes/Footer";

function Portifolio() {
    return (

        <div className="Portifolio__main">
            <div className="Portifolio__bkg">
                <img src={bkg} alt="" />
                <div className="Portifolio__content">
                    <div className="Portifolio__text">
                        <p>
                            Olá eu sou Sil Alves, sou produtora de moda. Se quiser conhecer mais sobre meu trabalho, clique no botão abaixo.
                        </p>
                    </div>
                    <div className="Portifolio__arrow">
                        <a href="#Cards">
                            <SlArrowDown />
                        </a>
                    </div>
                </div>
            </div>


            <div id="Cards" className="Portifolio__cards">
                <Cards
                    link="/Fashion"
                    img={Fash}
                    title="Fashion Week"
                    text="
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        "
                />
                <Cards
                    img={Evento}
                    title="Fashion Week"
                    text="
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        "
                />
                <Cards
                    img={Fash}
                    title="Fashion Week"
                    text="
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        "
                />
                <Cards
                    img={Fash}
                    title="Fashion Week"
                    text="
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        "
                />
                <Cards
                    img={Fash}
                    title="Fashion Week"
                    text="
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        "
                />
                <Cards
                    img={Fash}
                    title="Fashion Week"
                    text="
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        Teste de texto para a produção de moda de sil alves
                        "
                />
            </div>
        </div>





    );
}
export default Portifolio;