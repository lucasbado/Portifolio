import React from "react";
import './Home.css';
import bkg from "../../Img/bkg.png"

function Home() {
    return (
        <div className="Home__main">
            <div className="Home__bkg">
                <img src={bkg} alt="" />
           
            </div>
            <div className="Home__content">
                <div className="Home__glass">
                    <h1> Produção de moda</h1>
                    <h1>by</h1>
                    <h1 className="Name__main"> SIL ALVES</h1>
                    <a className="Link__main" href="Portifolio">Conheça</a>
                </div>
            </div>
           
        </div>
    );
}
export default Home;