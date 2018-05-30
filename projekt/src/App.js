import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ja1 from './ja1.jpg';
import ja2 from './ja2.jpg';
import kriz from './kriz.png';
import obrazok1 from './obrazok1.png';
import mobil from './mobil.png';
import './blog.css';
import gif from './gif.gif';
import obrazok2 from './obrazok2.png';
import './button.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-title">
            Prvá pomoc
          </div>
            <Tabs>
                <TabList>
                    <div className="App-taby">
                    <Tab>Domov</Tab>
                    <Tab>O aplikácii</Tab>
                    <Tab>O mne</Tab>
                    <Tab>Blog</Tab>
                    <Tab>Kontakt</Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <div className="App-vyber">
                        <h2>Ak je pacient v bezvedomí kliknite <button class="button">
                            <a href="/bezvedomie" onClick={() => {this.handleClick}}>Tu</a>
                        </button>
                        </h2>
                        <p><h2>Ak je pacient pri vedomí kliknite <button class="button">
                            <a href="/vedomie" onClick={() => {this.handleClick}}>Tu</a>
                        </button></h2></p>
                    </div>
                    <div className="App-cislo">
                            <h2>Číslo prvej pomoci: 112</h2>
                    </div>
                    <div className="App-obrazok1">
                        <img src={obrazok1} className="obrazok1.png" alt="prvapomoc" width={350} align="center"/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h3>
                        Túto aplikáciu som vytvoril na predmet Internetové a mobilné aplikácie.
                        <p> Hlavnou myšlienkou bolo pomôcť ľudom a lepšie sa zorientovať v každodennom svete problémov a nástrah. </p>
                        <p> Táto aplikácia sa môže využívať na školách, v autoškolách, ale aj v bežnom živote, pri získavaní dôležitých vedomostí.</p>
                        <div className="App-kriz">
                        <img src={kriz} className="kriz.png" alt="kriz" width={500}/>
                        </div>
                    </h3>
                </TabPanel>
                <TabPanel>
                    <h3>
                        Som študentom druhého ročníka Fakulty hospodárskej informatiky na Ekonomickej univerzite v Bratislave.
                        <p>Veľa budúcich študentov vysokých škôl sa bojí vybrať si informatický, resp. tehcnický smer vo svojom živote. Myslím si, že výberom tejto fakulty</p>
                        <p>som urobil významné rozhodnutie vo svojom živote. Naučil som sa tu veľa vecí, ktoré budem potrebovať v budúcnosti. Preto spojenie</p>
                        <p>informatiky a ekonómie odporúčam pre budúcich uchádzačov o vysoku školu.</p>
                        <p>Medzi moje hobby patrí futbal, nielen pasívne, ale aj aktívne, rôzne ostatné športy pasívne, cestovanie, spoznávanie nových krajín a kultúr.</p>
                        <div className="App-ja1">
                            <img src={ja1} className="ja1.jpg" alt="Ja1" width={200} align="left"/>
                        </div>
                        <div className="App-gif">
                            <img src={gif} className="gif.gif" alt="gif" width={200} align="center"/>
                        </div>
                        <div className="App-ja2">
                            <img src={ja2} className="ja2.jpg" alt="Ja2" width={245} align="right"/>
                        </div>
                    </h3>
                </TabPanel>
                <TabPanel>
                    <h3>
                        V tejto časti sa nachádza blog, pre všetky vaše rady, skúsenosti a otázky.
                        <p>Na vaše otázky tu máme poradňu. Ak chcete poradiť so zdravotným problém kliknite</p>
                        <p>
                            <form action="/blog">
                                <button type="link" class="btn btn:hover "> TU </button>
                            </form>
                        </p>
                        <p>
                            <form action="/users">
                                <button type="link" class="btn btn:hover ">Užívatelia</button>
                            </form>
                        </p>
                        <div className="App-mobil">
                            <img src={mobil} className="mobil.png" alt="mobil" width={280} align="center"/>
                        </div>
                    </h3>

                </TabPanel>
                <TabPanel>
                    <h3>

                        Mobilný telefón: 0902 410 821

                    <p>
                        Email: michal29.zavodny@gmail.com
                    </p>
                    <p>
                        <button>
                            <div className="App-button">
                                <a href="https://www.facebook.com/miso.zavodny" onClick={() => {this.handleClick}}>Facebook</a>
                            </div>
                        </button>
                    </p>
                    <p>
                        <button>
                            <div className="App-button">
                                <a href="https://www.instagram.com/maiki2904/" onClick={() => {this.handleClick}}>Instagram</a>
                            </div>
                        </button>
                    </p>
                    <div className="App-kontakt">
                        <img src={obrazok2} className="obrazok2.png" alt="kontakt" width={550} align="center"/>
                    </div>
                    </h3>
                </TabPanel>
            </Tabs>
      </div>

    );
  }
}



export default App;



