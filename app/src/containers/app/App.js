import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import classes from './App.css';

//import axios from 'axios';

import Layout from '../../components/layout/Layout';
import Home from '../home/Home';
import Reservations from '../reservations/Reservations';
import Payments from '../payments/Payments';
import GroupTravel from '../groupTravel/GroupTravel';
import Resources from '../resources/Resources';


class App extends Component {
  // componentDidMount() {
  //   axios.get('https://www.vacationcrm.com/travelmvc/api/Service/GetAgents?ApiKey=9A9535E5-B636-4C3B-BAA7-56C87E2FD076')
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <div className={classes.App}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/reservations" component={Reservations}/>
              <Route path="/payments" component={Payments}/>
              <Route path="/group-travel" component={GroupTravel}/>
              <Route path="/resources" component={Resources}/>
            </Switch>
          </div>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
