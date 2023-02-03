import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import './Css/Footer.css';

function Footer() {
    return (
        <div className="Footer__main">
            <div className="Footer__content">
                <div className="Footer__title">
                    <h1>Contato</h1>
                    <div className="Footer__text">
                        <h1>telefone: 99999-9999</h1>
                        <h1>Email:<a href="mailto:soo.eu.sil@gmail.com"> soo.eu.sil@gmail.com</a></h1>
                    </div>
                </div>
                <div className="Footer__social">
                    <p>

                        <a href="https://www.instagram.com/soo_eu_sil/">
                            <BsInstagram />
                        </a>
                        <a href="https://www.facebook.com/soo.eu.sil">
                            <BsFacebook />
                        </a>
                        <a href="https://www.linkedin.com/in/soo-eu-sil-9b1b1b1b9/">
                            <BsLinkedin />
                        </a>
                    </p>
                </div>
            </div>



        </div>
    );
}

export default Footer;