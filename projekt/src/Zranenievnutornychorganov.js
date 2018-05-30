import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Zranenievnutornychorganov.css';
import vkrvacanie from './vkrvacanie.jpg';
import noznice from './noznice.jpg'
import sipka from './sipka.png';

class Zranenievnutornychorganov extends Component {
    render() {
        return (
            <div>
                <div className="Zranenievnutornychorganov-title" align="center">
                        <div className="Zranenievnutornychorganov-sipka">
                        <Link to="/bezvedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                        </div>
                        Zranenie vnútorných orgánov
                </div>
                <div className="Zranenievnutornychorganov-text">
                    <h2>najčastejšie dochádza k poškodeniu orgánov brušnej dutiny
                        <p>poranenie sú najčastejšie otvorené a preto pri nich postupujeme ako pri <Link to="/silnekrvacanie">krvácaní</Link> </p>
                        <p>ak máme podozrenie na vnútorné krvácanie, s pacientom nehýbeme a čakáme na príchod lekára.</p>
                    </h2>
                    <div className="Zranenievnutornychorganov-krvacanie">
                        <img src={vkrvacanie} className="vkrvacanie.jpg" alt="vnutornekrvacanie" width={400} align="right"/>
                    </div>
                    <div className="Zranenievnutornychorganov-noznice">
                        <img src={noznice} className="noznice.jpg" alt="noznice" width={400} align="left"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Zranenievnutornychorganov;