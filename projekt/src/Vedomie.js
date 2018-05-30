import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Vedomie.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import sipka from './sipka.png';
import obrazok3 from './obrazok3.png';
import obrazok4 from './obrazok4.png';
import './button.css';

class Vedomie extends Component {
    render() {
        return (
            <div>
                <div className="Vedomie-title" align="center">
                    Prvá pomoc pri vedomí
                </div>
                <div className="Vedomie-spat">
                    <Link to="/"><img src={sipka} className="sipka.png" alt="sipkaspat" width={60}/></Link>
                </div>

                    <h2> Ak je pacient pri vedomí, má vonkajšie alebo vnútorné zranenia? </h2>

                <Tabs>
                    <TabList>
                        <div className="Vedomie-taby">
                            <Tab>Zranenie s viditeľnými príznakmi</Tab>
                            <Tab>Zranenie, ktorého príznaky nevidíme</Tab>
                        </div>
                    </TabList>
                    <TabPanel>
                        <div className="Vedomie-vyber">
                            <h1>Ak pacient krváca alebo má otvorené rany kliknite <button class="button">
                                <a href="/krvacanie" onClick={() => {this.handleClick}}>Tu</a>
                            </button></h1>
                            <p><h1>Ak má pacient otvorenú zlomeninu kliknite <button class="button">
                                <a href="/otvorenazlomenina" onClick={() => {this.handleClick}}>Tu</a>
                            </button></h1></p>
                                <p><h1>Ak má pacient popálenie alebo poleptanie kliknite <button class="button">
                                    <a href="/popalenie" onClick={() => {this.handleClick}}>Tu</a>
                                </button></h1></p>
                                    <p><h1>Ak sa pacient dusí kliknite <button class="button">
                                        <a href="/duseniesa" onClick={() => {this.handleClick}}>Tu</a>
                                    </button></h1></p>
                        </div>
                        <div className="Vedomie-obrazok3">
                            <img src={obrazok3} className="obrazok3.png" alt="krvacanie" width={400} align="left"/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="Vedomie-vyber">
                            <h1>Ak máte podozrenie na zranenie vnútorných orgánov kliknite <button class="button">
                                <a href="/zranenie" onClick={() => {this.handleClick}}>Tu</a>
                            </button></h1>
                            <p><h1>Ak máte podozrenie na zlomeninu kliknite <button class="button">
                                <a href="/zlomenina" onClick={() => {this.handleClick}}>Tu</a>
                            </button></h1></p>
                                <p><h1>Ak pacient utrpel šok kliknite <button class="button">
                                    <a href="/Sok" onClick={() => {this.handleClick}}>Tu</a>
                                </button></h1></p>
                        </div>
                        <div className="Vedomie-obrazok4">
                            <img src={obrazok4} className="obrazok4.png" alt="krvacanie" width={300} align="left"/>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Vedomie;