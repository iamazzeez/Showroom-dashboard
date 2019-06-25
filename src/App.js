import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Dashboard from "./Dashboard";
import Users from "./Users";
import UserDetails from './UserDetails';



class App extends Component {



  render() {
    return (
      <Router>
   <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Torque Motors</a>
          <ul class="navbar-nav mr-auto">
      <li className="nav-item ">
        <a className="nav-link" href="/dashboard">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/users">Users</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li> */}
    </ul>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
        </nav>
      
  
      <Switch>
        <Route exact path="/users/:id" component={UserDetails}/>
        <Route path="/users" exact strict component={Users} />
        <Route exact path="/" component={Dashboard}/>
        </Switch>
  </div>
      </Router>
    );
  }
}

export default App;
