import React from "react";
import "./Css/Eventos.css";


function Eventos(props) {
    return (
        <div className="Eventos__main">
            <div className="Eventos__content">
                <div className="Eventos__img">
                    <img src={props.img} alt="" />
                </div>
                <div className="Eventos__text">
                    <h1 className="Tittle">{props.title}</h1>
                    <h1 className="Data">{props.data}</h1>
                    <h1 className="Text">{props.text}</h1>
                </div>
                <div className="Eventos__description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Eventos;