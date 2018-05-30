import React, { Component } from 'react';
import "./blog.css";
import sipka from './sipka.png';
import { Link } from 'react-router-dom';

class blog extends Component {
    render() {
        return (
            <div class="blog">
                <div class="nadpis" align="center">

                    <h2>Máte otázky? Prosím vyplňte dotazník.</h2>

                </div>
                <p>
                    <form>
                        <div>
                            <label for="uname">Priezvisko: </label>
                            <input type="text" id="uname" name="name"
                                   placeholder="Závodný"/>
                        </div>

                    </form>
                </p>
                <p>
                    <form>
                        <fieldset>

                            <legend>Pohlavie</legend>
                            <div>
                                <input type="checkbox" id="áno" name="interest" value="áno" />
                                <label for="žena">Žena</label>
                            </div>
                            <div>
                                <input type="checkbox" id="nie" name="interest" value="music"/>
                                <label for="muž">Muž</label>
                            </div>

                        </fieldset>
                    </form>
                </p>
                <p>
                    <form>
                        <fieldset>
                            <legend> Prekonali ste v minulosti závažné ochorenie?</legend>
                            <div>
                                <input type="checkbox" id="áno" name="interest" value="áno" />
                                <label for="áno">Áno</label>
                            </div>
                            <div>
                                <input type="checkbox" id="nie" name="interest" value="music"/>
                                <label for="nie">Nie</label>
                            </div>
                            <div>
                                <input type="checkbox" id="nie som si istý/á" name="interest" value=""/>
                                <label for="nie som si istý">Nie som si istá/ý</label>
                            </div>
                        </fieldset>
                    </form>
                </p>
                <p>
                    <form>
                        <fieldset>
                            <legend>Zaškrknite ak trpíte nasledujúcimi ochoreniami</legend>
                            <div>
                                <input type="checkbox" id="coding" name="interest" value="coding"/>
                                <label for="Alergia">Alergia</label>
                            </div>
                            <div>
                                <input type="checkbox" id="music" name="interest" value="music"/>
                                <label for="Epilepsia">Epilepsia</label>
                            </div>
                            <div>
                                <input type="checkbox" id="sports" name="interest" value="sports"/>
                                <label for="Vysoký tlak">Vysoký tlak</label>
                            </div>
                            <div>
                                <input type="checkbox" id="other" name="interest" value="other"/>
                                <label for="other">Iné </label>
                                <input type="text" id="otherValue" name="other"/>
                            </div>
                            <div>
                                <button type="submit">Potvrdiť</button>
                            </div>
                        </fieldset>
                    </form>
                </p>
                <p>
                    <form>
                        <div class="emailBox">
                            <label for="emailAddress">Vaša emailová adresa</label>
                            <input id="emailAddress" type="email" size="64" maxLength="64" required
                                   placeholder="michal29.zavodny@gmail.com"
                                   title="Please provide only a Best Startup Ever corporate email address"/>
                        </div>

                        <div class="messageBox">
                            <label for="message">Otázka</label>
                            <textarea id="message" cols="80" rows="8" required
                                      placeholder="Bolí ma stále hlava, neviem si poradiť..."></textarea>
                        </div>
                        <input type="submit" value="Potvrdiť a odoslať"/>
                    </form>
                </p>



            </div>


        );
    }
}

export default blog;