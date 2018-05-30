import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Popalenie.css';
import sipka from './sipka.png';
import popaleniny from './popaleniny.jpg';
import popalenina2 from './popalenina2.jpg';
import popalenina3 from './popalenina3.jpg';

class Popalenie extends Component {
    render() {
        return (
            <div>
                <div className="Popalenie-title" align="center">
                        <div className="Popalenie-sipka">
                            <Link to="/vedomie"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                        </div>
                        Popáleniny
                </div>
                <div className="Popalenie-text">
                    <h2>je poranenie, ktoré vzniká pôsobením tepla, elektrického prúdu a horúcich látok na kožu
                        <p>pri popálení a poleptaní čistíme ranu prúdom studenej tečúcej vody asi 20 minút</p>
                        <p>ak je na pokožke priškvarený odev, nikdy ho neodtrháme !!!</p>
                    </h2>
                </div>
                <div className="Popalenie-popaleniny">
                    <img src={popaleniny} className="popaleniny.jpg" alt="popaleniny" width={350} align="left"/>
                </div>
                <div className="Popalenie-popalenina2">
                    <img src={popalenina2} className="popalenina2.jpg" alt="popaleniny" width={400} align="right"/>
                </div>
                <div className="Popalenie-popalenina3">
                    <img src={popalenina3} className="popalenina3.jpg" alt="popaleniny" width={370} align="right"/>
                </div>
            </div>
        );
    }
}

export default Popalenie;