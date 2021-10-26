import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
// import TransmittalPage from './pages/TransmittalPage';

export default class App extends Component {
  constructor(props) {
		super(props);

		// this.state = {
		// 	userName: 'Zander',
		// 	todoItems: [
		// 		{ action: 'Buy Milk', done: true },
		// 		{ action: 'Dentist at 5pm', done: false },
		// 		{ action: 'Go to Gym', done: false },
		// 	],
		// 	newTodo: '',
		// };
	}

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/transmittals" component={HomePage} />
            {/* <Route path="/transmittal" component={TransmittalPage} /> */}
            {/* <Route component={GenericNotFound} /> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
