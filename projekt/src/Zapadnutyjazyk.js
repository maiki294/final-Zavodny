import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Zapadnutyjazyk.css';
import sipka from './sipka.png';
import obrazok7 from './obrazok7.png';
import obrazok8 from './obrazok8.png';


class Zapadnutyjazyk extends Component {
    render() {
        return (
            <div>
                <div className="Zapadnutyjazyk-title" align="center">
                        <div className="Zapadnutyjazyk-sipka">
                            <Link to="/bezvedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                        </div>
                        Zapadnutý jazyk
                </div>
                <div className="Zapadnutyjazyk-text">
                    <h2>možná príčina zástavy dýchania
                        <p>nasadíme si rukavice a jazyk/predmet vytiahneme </p>
                        <p>ak pacient nezačne po pár sekundách dýchať, resuscitujeme</p>
                        <p>pri resuscitácií 30 krát stlačíme miesto v oblasti hrudnej kosti, 2 krát vdýchneme, s frekvenciou 100</p>
                        <p>  stlačení/minúta</p>
                        <p>ak pacient nezačne dýchať ani po resuscitácií, nastáva biologická smrť</p>
                    </h2>
                </div>
                <div className="Zapadnutyjazyk-obrazok7">
                    <img src={obrazok7} className="obrazok7.png" alt="resuscitacia" width={350} align="left"/>
                </div>
                <div className="Zapadnutyjazyk-obrazok8">
                    <img src={obrazok8} className="obrazok8.png" alt="resuscitacia" width={400} align="right"/>
                </div>
            </div>
        );
    }
}

export default Zapadnutyjazyk;