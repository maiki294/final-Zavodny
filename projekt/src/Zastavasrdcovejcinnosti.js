import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Zastavasrdcovejcinnosti.css';
import sipka from './sipka.png';
import obrazok7 from './obrazok7.png';
import obrazok8 from './obrazok8.png';


class Zastavasrdcovejcinnosti extends Component {
    render() {
        return (
            <div>
                <div className="Zastavasrdcovejcinnosti-title" align="center">
                    <div className="Zastavasrdcovejcinnosti-sipka">
                        <Link to="/bezvedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                    </div>
                    Zástava srdcovej činnosti
                </div>
                <div className="Zastavasrdcovejcinnosti-text">
                    <h2>
                        <p>pri resuscitácií 30 krát stlačíme miesto v oblasti hrudnej kosti, 2 krát vdýchneme, s frekvenciou 100</p>
                        <p>  stlačení/minúta</p>
                        <p>ak pacient nezačne dýchať ani po resuscitácií, nastáva biologická smrť</p>
                    </h2>
                </div>
                <div className="Zastavasrdcovejcinnosti-obrazok7">
                    <img src={obrazok7} className="obrazok7.png" alt="resuscitacia" width={350} align="left"/>
                </div>
                <div className="Zastavasrdcovejcinnosti-obrazok8">
                    <img src={obrazok8} className="obrazok8.png" alt="resuscitacia" width={400} align="right"/>
                </div>
                <div className="Zastavasrdcovejcinnosti-video">
                    <button>
                        <a href="https://www.youtube.com/watch?v=ymDWL2g3-2E" onClick={() => {this.handleClick}}>Ťuknutím si pozrite video, čo robiť pri resuscitácií</a>
                    </button>
                </div>
            </div>
        );
    }
}

export default Zastavasrdcovejcinnosti;




