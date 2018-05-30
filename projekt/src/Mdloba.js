import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mdloba.css';
import 'react-tabs/style/react-tabs.css';
import obrazok6 from './obrazok6.png';
import obrazok5 from './obrazok5.png';
import sipka from './sipka.png';

class Mdloba extends Component {
    render() {
        return (
            <div>
                <div className="Sok-title">
                        <div className="Sok-sipka">
                            <Link to="/bezvedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                        </div>
                        Mdloba
                </div>
                <div className="Sok-text">
                    <h2>mdloba je krátka strata vedomia, najčastejšie v dôsledku strachu alebo preľaknutia (šok)
                        <p>vyznačuje stiahnutím ciev, nedostatkom kyslíka - ochromený mozog</p>
                        <p>pacient zvyčajne nemusí mať iné zranenie, je bledý</p>
                        <p>pacienta treba zabaliť do termofólie a uložiť ho do protišokovej polohy</p>
                    </h2>
                    <div className="Sok-5T">
                    Aplikáciou 5 T môže záchranca v teréne aj bez pomôcok urobiť veľa pre postihnutého, pretože sú to výkony zachraňujúce život.
                    </div>
                    <div className="Sok-T5">
                        1.Ticho
                        <p>2.Teplo</p>
                        <p>3.Tekutiny</p>
                        <p>4.Tíšenie</p>
                        <p>5.Transport</p>
                    </div>
                    <div className="Sok-obrazok6">
                        <img src={obrazok6} className="obrazok6" alt="termofolia" width={200} align="right"/>
                    </div>
                    <div className="Sok-obrazok5">
                        <img src={obrazok5} className="obrazok5" alt="protisokovapoloha" width={500} align="right"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mdloba;