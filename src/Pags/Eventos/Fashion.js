import React from "react";
import Eventos from "../../Componentes/Eventos";
import bkg from "../../Img/Eventos.jpg";


function Fashion() {
    return (
        <>
            <Eventos
                img={bkg}
                title="Fashion Week"
                data="17/01/2023"
                text="Teste para a descrição da caixa de texto"
                description="testeembaixo"
            />
        </>
    );
}

export default Fashion;