import Bkg from '../../Img/ParceriasBkg.png'
import './Parcerias.css'


function Parcerias() {
    return (
        <div className="Parcerias__main">
            <div className="Parcerias__bkg">
                <img src={Bkg} alt="" />
            </div>
            <div className="Parcerias__content">
                <div className="Parceria__Box">
                    <h1>Parcerias</h1>
                    <p>Logo das empresas parceiras</p>

                </div>
             
            </div>

        </div>
    )
}

export default Parcerias