import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import './Css/Footer.css';

function Footer() {
    return (
        <div className="Footer__main">
            <div className="Footer__content">
                <div className="Footer__titulo">
                    <h1>Contato</h1>
                </div>
                <div className="Footer__text">
                    <h1>telefone: 99999-9999</h1>
                    <h1>Email:<a href="mailto:soo.eu.sil@gmail.com">soo.eu.sil@gmail.com</a></h1>
                </div>
                <div className="Footer__social">
                    <a href="https://www.instagram.com/soo_eu_sil/">
                        <BsInstagram />
                    </a>
                    <a href="https://www.facebook.com/soo.eu.sil">
                        <BsFacebook />
                    </a>
                    <a href="https://www.linkedin.com/in/soo-eu-sil-9b1b1b1b9/">
                        <BsLinkedin />
                    </a>
                </div>
            </div>



        </div>
    );
}

export default Footer;