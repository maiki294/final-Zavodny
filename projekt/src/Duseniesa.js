import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Duseniesa.css';
import 'react-tabs/style/react-tabs.css';
import sipka from './sipka.png';
import obrazok9 from './obrazok9.png';
import obrazok10 from './obrazok10.png';

class Duseniesa extends Component {
    render() {
        return (
            <div>
                <div className="Duseniesa-title" align="center">
                        <div className="Duseniesa-sipka">
                            <Link to="/vedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                        </div>
                        Dusenie sa
                </div>
                <div className="Duseniesa-text">
                    <h2>pri dusení sa pacienta používame Heimlichov hmat, ktorý ma 2 stupne:
                        <p>1. dusiaci je v predklone, pri výdychu 5 krát buchneme päsťou </p>
                        <p>2. oboma rukami objímeme dusiaceho sa pacienta (ruky položíme na hornú časť brucha)</p>
                        <p>pacient sa nakloní dopredu, pri výdychu 5 krát buchneme rukami do brucha smerom nahor</p>
                        <p>ak Heimlichov hmat nepomáha, <Link to="/zastavasrdcovejcinnosti">resuscitujeme</Link></p>
                    </h2>
                </div>
                <div className="Duseniesa-obrazok9">
                    <img src={obrazok9} className="obrazok9.png" alt="heimlichovhmat" width={450} align="right"/>
                </div>
                <div className="Duseniesa-obrazok10">
                    <img src={obrazok10} className="obrazok10.png" alt="buchanie po chrbte" width={325} align="left"/>
                </div>
            </div>
        );
    }
}

export default Duseniesa;