import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage'
import TransmittalPage from './pages/TransmittalPage';

const App = () => {
  let userid = "000-11-000"
  return (
    <Router>
      <Route path="/user/:userid" component={HomePage} />
      <Route path="/transmittal" component={TransmittalPage} />
      {/* <Route component={GenericNotFound} /> */}
    </Router>
  )
}

export default App
