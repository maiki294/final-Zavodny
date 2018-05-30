import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Bezvedomie.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import obrazok3 from './obrazok3.png';
import sipka from './sipka.png';
import obrazok4 from './obrazok4.png';
import './button.css';

class Bezvedomie extends Component {
    render() {
        return (
            <div>
                <div className="Bezvedomie-title" align="center">
                Prvá pomoc pri bezvedomí
                </div>
                <div className="Bezvedomie-sipka">
                    <Link to="/"><img src={sipka} className="sipka.png" alt="sipkaspat" width={50}/></Link>
                </div>

                <h2> Ak je pacient v bezvedomí, dýcha alebo nedýcha? </h2>

                <Tabs>
                    <TabList>
                        <div className="Bezvedomie-taby">
                            <Tab>Dýcha</Tab>
                            <Tab>Nedýcha</Tab>
                        </div>
                    </TabList>
                    <TabPanel>
                        <div className="Bezvedomie-vyber">
                            <h1>Ak je pacient v mdlobe kliknite <button class="button">
                                <a href="/Sok" onClick={() => {this.handleClick}}>Tu</a>
                            </button>
                            </h1>
                            <p><h1>Ak pacient silne krváca kliknite <button class="button">
                                <a href="/Silnekrvacanie" onClick={() => {this.handleClick}}>Tu</a>
                            </button></h1></p>
                                <p><h1>Ak máte podozrenie na zranenie vnútornych orgánov <button class="button">
                                    <a href="/Zranenievnutornychorganov" onClick={() => {this.handleClick}}>Tu</a>
                                </button></h1></p>
                                    <p><h1>Ak máte podozrenie na zlomeninu kliknite <button class="button">
                                        <a href="/Zlomenina" onClick={() => {this.handleClick}}>Tu</a>
                                    </button></h1></p>
                        </div>
                        <div className="Bezvedomie-obrazok3">
                            <img src={obrazok3} className="obrazok3.png" alt="krvacanie" width={400} align="left"/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="Bezvedomie-vyber">
                            <h1>Ak má pacient zapadnutý jazyk kliknite <button class="button">
                                <a href="/zapadnutyjazyk" onClick={() => {this.handleClick}}>Tu</a>
                            </button></h1>
                            <p><h1>Ak má pacient zástavu činnosti srdca kliknite <button class="button">
                                <a href="/zastavasrdcovejcinnosti" onClick={() => {this.handleClick}}>Tu</a>
                            </button></h1></p>
                        </div>
                        <div className="Bezvedomie-obrazok4">
                            <img src={obrazok4} className="obrazok4.png" alt="krvacanie" width={300} align="left"/>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Bezvedomie;