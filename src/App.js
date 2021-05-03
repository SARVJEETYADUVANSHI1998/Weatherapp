import React from 'react';
import Contect from './containers/Contact/Contect';
import Weather from './containers/Weatherapp/Weather';
import Navbar from './containers/Navbar/Navbar'
import Help from './containers/Help/Help';
import About  from './containers/About/About';
import {Switch,Route, Redirect} from 'react-router-dom' ;
import './App.css';

function App() {


  return (
    <div>
       <Navbar/>
       <Switch>
        <Route path='/' component={About} exact>
          <About/>
        </Route>
        <Route path='/Help'component={Help} exact>
          <Help/>
        </Route>
        <Route path='/Weather'component={Weather} exact>
        <Weather/>
        </Route>
        <Route path='/Contect'component={Contect} exact>
          <Contect/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
