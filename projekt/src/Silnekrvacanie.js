import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Silnekrvacanie.css';
import krvacanie from './krvacanie.png';
import sipka from './sipka.png';

class Silnekrvacanie extends Component {
    render() {
        return (
            <div>
                <div className="Silnekrvacanie-title" align="center">
                        <div className="Silnekrvacanie-sipka">
                            <Link to="/bezvedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                        </div>
                        Silné krvácanie
                </div>
                <div className="Silnekrvacanie-text">
                    <h2>dej, pri ktorom krv samovoľne vyteká z narušených tkanív a ciev
                        <p>ak je v rane zapichnutý predmet, nikdy ho NEVYŤAHUJEME!!! </p>
                        <p>ak krváca končatina, je potrebné oblasť nad ranou pevne uviazať obväzom, opaskom, šatkou a podobne.</p>
                        <p>ak krváca iná časť tela, je potrebné na ranu položiť gázu a pevne pritlačiť a obviazať </p>
                        <p>akúkoľvek ranu treba pevne obviazať </p>
                        <p>okolie rany treba vyčistiť dezinfekčným prostriedkom (ktorý nikdy nelejeme priamo do rany!!!) </p>
                    </h2>
                    <div className="Silnekrvacanie-krvacanie">
                        <img src={krvacanie} className="krvacanie.png" alt="krvacanie" width={150} align="right"/>
                    </div>
                </div>
                <button>
                    <div className="Silnekrvacanie-video">
                        <a href="https://www.youtube.com/watch?v=40lNgMef0hc" onClick={() => {this.handleClick}}>Ťuknutím si pozrite video, čo robiť pri krvácaní</a>
                    </div>
                </button>
            </div>
        );
    }
}

export default Silnekrvacanie;