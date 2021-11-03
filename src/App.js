import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import TransmittalPage from './pages/TransmittalPage';

export default class App extends Component {
  constructor(props) {
		super(props);
	}

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/transmittals" component={TransmittalPage} />
            {/* <Route component={GenericNotFound} /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
