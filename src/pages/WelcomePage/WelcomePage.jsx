import { useState} from "react";
import logo from '../../assets/logo-ancora.png';
import style from './WelcomePage.module.css';
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu.jsx";
// import {useFetch} from "../../hooks/useFetch.js";


export default function WelcomePage({setCurrentPage}) {


    // const fetchProducts = useCallback(async () => {
    //     const response = await fetch('https://api-stg-catalogo.redeancora.com.br/superbusca/api/integracao/catalogo/v2/produtos/query/sumario', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkRFQkJDQUJBMjIwQjRGOTVDOTA5NTNFMURBMTlENEUzQzFDRDFGRDciLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiIzcnZLdWlJTFQ1WEpDVlBoMmhuVTQ4SE5IOWMifQ.eyJuYmYiOjE3MTQ0ODk0NzYsImV4cCI6MTcxNDU3NTg3NiwiaXNzIjoiaHR0cHM6Ly9zc28tY2F0YWxvZ28ucmVkZWFuY29yYS5jb20uYnIiLCJhdWQiOiJTZWFyY2hFbmdpbmVBcGkuc3RnIiwiY2xpZW50X2lkIjoiNjV0dmg2cnZuNGQ3dWVyM2hxcW0ycDhrMnB2bm01d3giLCJyb2xlIjoicmVhZCIsInNjb3BlIjpbInNlYXJjaGVuZ2luZWFwaS5zdGciXX0.dcmNQQHZW0IsRMkmLlAg8ek6ti9hVaRK29fTRR02qbBXzpr5pkSzykJRAKWcMLFiE2HjsMLGk3aX6MaxurqbK0Rdg2Wub2d0FrEL7JOpiYOZ1K9RxkYjigZCsHszUAPiK3h-Pd6HilqdEjVvN3dBpGN3BE41yFOIF60rtS87I9LdpPHL_VDPpmVySEh9AkraH-s44BzCvSI-o19XgtzQBj7X9BPScFmLQQTIIgKBN2Em_wTYlmEJpW9207YJIAKFbb39Tum9Kv80vV0IxQsTW-0HCjXHyjscdhuFMirLbhnVvET79YWRWhHlp_4u28nUD5DZJ5ZRZOg-vHn7g6HckFRBdbty3jAhRrzAt00nauOETWYSoyc3eWk6F-eA-N3h60lypp_sb9N9rx8_d-oxJCJdMdNf23V9K8o-z-7byGRkTZ3M_XPyLl716Fow2imH0rrBDD7T3T9DTtCzq_NnsQJcMid21Ks7fwIizrLkTxNoa6f9Et8xOUpDnad6dJ4A1ozR5IBOVPCojmPZDrSUigCYIhpIaBGHh7E37Sb6RRvtP-3Pl3Vx8vJsRzqqxpi-t8j2mRcZcSO2-jDUFoHudafndfISOkV-uLkjZ20tEEg7Cr6b0iwBjtuURinM0wldofrVjFPlN0glTSTJG3sTSIhbMyhT0G7Ry_Xm0z4KC_Q`, // Substitua "yourToken" pelo seu token real
    //         },
    //         body: JSON.stringify({
    //             "veiculoFiltro": {
    //                 "veiculoPlaca": "SVU8C63"
    //             },
    //             "superbusca": "AMORTECEDOR",
    //             "pagina": 0,
    //             "itensPorPagina": 100
    //         })
    //     });
    //
    //     const resData = await response.json();
    //
    //     if (!response.ok) {
    //         throw new Error('Failed to fetch places');
    //     }
    //
    //     return resData.pageResult;
    // } , []);
    //
    // const { fetchedData } = useFetch(fetchProducts, []);

    const [showVideo, setShowVideo] = useState(false);

    const handleOverlayClick = (e) => {
        setShowVideo(false);
    }

    const handleVideoClick = (e) => {
        e.stopPropagation();
    }
    const handleScreenClick = () => {
        setCurrentPage('FormPage');
    }

    return (
        <div className={style.background} onClick={handleScreenClick}>
            <HamburgerMenu setShowVideo={setShowVideo} />
            {!showVideo && <div className={`${style.overlay} flex-column justify-content-center h-100`}>
                <img src={logo} alt="Ancora logo" className={style.logo}/>
                <p className={style.title}>FAÇA SEU PEDIDO AQUI</p>
                <p className={style.subtitle}>Toque na tela para iniciar</p>
            </div>}
            {showVideo && <div className={`${style.overlay} flex-column justify-content-center h-100`} onClick={handleOverlayClick}>
                <iframe
                    src="https://www.youtube.com/embed/3i7OBEuRTtI?controls-0"
                    title="YouTube video player"
                    className={style.video}
                    onClick={handleVideoClick}
                />
            </div>}
        </div>
    )
}