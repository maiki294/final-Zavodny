import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Zlomenina.css';
import satka from './satka.jpg';
import zlomenina from './zlomenina.jpg';
import sipka from './sipka.png';

class Zlomenina2 extends Component {
    render() {
        return (
            <div>
                <div className="Zlomenina-title" align="center">
                    <h2>
                        <div className="Zlomenina-spat">
                            <Link to="/vedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                        </div>
                        Zlomenina</h2>
                </div>
                <div className="Zlomenina-text">
                    <h2>- ak je pacient v bezvedomí, zvyčajne je zlomenina otvorená
                        <p>- pri otvorenej zlomenine kosť za žiadných okolností nezatláčame, ani s ňou nijako nehýbeme </p>
                        <p>- úlomok kosti sterilne prikryjeme</p>
                        <p>- ak je postihnutá dolná končatina, je dobré priviazať ju ku zdravej končatine</p>
                        <p>- postihnutý je prepravovaný poležiačky</p>
                        <p>- pri jednoduchej zlomenine končatinu zafixujeme, aby sa nehýbala (trojcípa šatka - na ruku, drevo- na nohu)</p>
                    </h2>
                </div>
                <div className="Zlomenina-satka">
                    <img src={satka} className="satka.jpg" alt="satka" width={300} align="left"/>
                </div>
                <div className="Zlomenina-zlomenina">
                    <img src={zlomenina} className="zlomenina.jpg" alt="satka" width={300} align="right"/>
                </div>
            </div>
        );
    }
}

export default Zlomenina2;