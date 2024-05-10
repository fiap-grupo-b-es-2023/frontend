import {useState} from "react";
import logo from '../../assets/logo-ancora.png';
import style from './WelcomePage.module.css';
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu.jsx";
import {Button, Image} from "react-bootstrap";
import propTypes from "prop-types";
import {IoIosArrowBack} from "react-icons/io";



export default function WelcomePage({setCurrentPage}) {

    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClick = (e) => {
        e.stopPropagation();
    }

    const handleScreenClick = () => {
        setCurrentPage('FormPage');
    }

    return (
        <div className={style.background} onClick={handleScreenClick}>
            <HamburgerMenu setShowVideo={setShowVideo} setCurrentPage={setCurrentPage}/>
            <div className={"fullScreenContainer"}>
                {!showVideo &&
                    <div className={"d-flex flex-column justify-content-center align-items-center h-100"}>
                        <Image src={logo} alt="Ancora logo" className={style.logo}/>
                        <p className={style.title}>FAÇA SEU PEDIDO AQUI</p>
                        <p className={style.subtitle}>Toque na tela para iniciar</p>
                    </div>}
                {showVideo &&
                    <div className={`d-flex  flex-column align-items-center w-100`} onClick={(e) => e.stopPropagation()}>
                        <Button className={`${style.backButton} align-self-start pb-5`} onClick={() => setShowVideo(false)}>
                            <IoIosArrowBack className="me-2" /> Voltar
                        </Button>
                        <iframe
                            src="https://www.youtube.com/embed/3i7OBEuRTtI?controls-0"
                            title="YouTube video player"
                            className={style.video}
                            onClick={handleVideoClick}
                        />
                    </div>}
            </div>
        </div>
    )
}

WelcomePage.propTypes = {
    setCurrentPage: propTypes.func.isRequired,
};