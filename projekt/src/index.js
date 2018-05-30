import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Bezvedomie from './Bezvedomie';
import Vedomie from './Vedomie';
import Sok from './Mdloba';
import Silnekrvacanie from './Silnekrvacanie';
import Zranenievnutornychorganov from './Zranenievnutornychorganov';
import Zlomenina from './Zlomenina';
import Zapadnutyjazyk from './Zapadnutyjazyk';
import Zastavasrdcovejcinnosti from './Zastavasrdcovejcinnosti';
import Krvacanie from './Krvacanie';
import Otvorenazlomenina from './Otvorenazlomenina';
import Popalenie from './Popalenie';
import Duseniesa from './Duseniesa';
import Zranenie from './Zranenie';
import Zlomenina2 from './Zlomenina2';
import Sok2 from './Sok2';
import blog from './blog';
import people from './people';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/bezvedomie" component={Bezvedomie} />
            <Route path="/vedomie" component={Vedomie} />
            <Route path="/sok" component={Sok} />
            <Route path="/silnekrvacanie" component={Silnekrvacanie} />
            <Route path="/zranenievnutornychorganov" component={Zranenievnutornychorganov} />
            <Route path="/zlomenina" component={Zlomenina} />
            <Route path="/zapadnutyjazyk" component={Zapadnutyjazyk} />
            <Route path="/zastavasrdcovejcinnosti" component={Zastavasrdcovejcinnosti} />
            <Route path="/krvacanie" component={Krvacanie} />
            <Route path="/otvorenazlomenina" component={Otvorenazlomenina} />
            <Route path="/popalenie" component={Popalenie} />
            <Route path="/duseniesa" component={Duseniesa} />
            <Route path="/zranenie" component={Zranenie} />
            <Route path="/zlomenina2" component={Zlomenina2} />
            <Route path="/sok2" component={Sok2} />
            <Route path="/blog" component={blog} />
            <Route path="/users" component={people} />

        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();