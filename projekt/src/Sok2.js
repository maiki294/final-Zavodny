import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mdloba.css';
import sipka from './sipka.png';

class Sok2 extends Component {
    render() {
        return (
            <div>
                <div className="Sok-title" align="center">
                        <div className="Sok-sipka">
                            <Link to="/vedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                        </div>
                        Šok
                </div>
                <div className="Sok-text">
                    <h2>- šok je ťažký stav bezprostredne ohrozujúci život
                        <p>- vyznačuje stiahnutím ciev, nedostatkom kyslíka - ochromený mozog </p>
                        <p>- pacient zvyčajne nemusí mať iné zranenie, ale potí sa, je bledý, má neprítomný pohľad, môže byť agresívny </p>
                        <p>- pacienta treba zabaliť do termofólie </p>
                    </h2>
                    <div className="Sok-5T">
                        <h3>Aplikáciou 5 T môže záchranca v teréne aj bez pomôcok urobiť veľa pre postihnutého, pretože sú to výkony zachraňujúce život.</h3>
                    </div>
                    <div className="Sok-T5">
                        1.Ticho
                        <p>2.Teplo</p>
                        <p>3.Tekutiny</p>
                        <p>4.Tíšenie</p>
                        <p>5.Transport</p>
                    </div>
                    <button>
                        <div className="Sok-video">
                            <a href="https://www.youtube.com/watch?v=uwlAcnHb6cI" onClick={() => {this.handleClick}}>Ťuknutím si pozrite video, čo robiť pri šoku</a>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Sok2;