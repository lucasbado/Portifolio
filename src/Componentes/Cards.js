import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Css/Cards.css";

function Cards(props) {
    return (

        <div class="Cards__main">
            <div class="Cards__content">
                <a href={props.link}>
                    <div class="Cards__img">
                        <img src={props.img} alt="aa" />
                    </div></a>
                <div class="Cards__text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>

                <div class="property-social-icons">
                    
                    <a href="http://facebook.com">
                        <BsFacebook />
                    </a>
                    <a href="http://instagram.com">
                        <BsInstagram />
                    </a>
                    <a href="http://linkedin.com">
                        <BsLinkedin />
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Cards;