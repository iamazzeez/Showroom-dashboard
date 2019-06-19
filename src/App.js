import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Users from "./Users";



class App extends Component {



  render() {
    return (
      <Router>
   <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Torque Motors</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
        </nav>
      
  
      <Switch>
        <Route path="/" exact strict component={Users} />
        </Switch>
  </div>
      </Router>
    );
  }
}

export default App;
