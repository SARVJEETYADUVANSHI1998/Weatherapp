import React from 'react';
import Weather from './containers/Weatherapp/Weather';
import Help from './containers/Help/Help';
import About  from './containers/About/About';
import {Switch,Route} from 'react-router-dom' ;
import './App.css';

function App() {


  return (
    <div className="App">
       <Switch>
        <Route path='/about' exact>
          <About/>
        </Route>
        <Route path='/help' exact>
          <Help/>
        </Route>
        <Route path='/weather' exact>
        <Weather title='this is my first weather app' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
