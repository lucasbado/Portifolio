import React from 'react';
import './Sobre.css';
import bkg from "../../Img/bkg2.png"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function Sobre() {
    return (

        <div className="Sobre">
            <div className="Sobre__bkg">
                <img src={bkg} alt="" />
            </div>
            <div className="Sobre__content">
                <p>
                    <a href='ttps://www.instagram.com/'>
                        <BsInstagram />
                    </a>

                    <a href="https://www.facebook.com/">
                        <BsFacebook />
                    </a>

                    <a href='ttps://www.instagram.com/'>
                        <BsLinkedin />
                    </a>
                    <a href="mailto:soo.eu.sil@gmail.com"> <GrMail />

                    </a>
                </p>

            </div>
        </div >
    );
}

export default Sobre;