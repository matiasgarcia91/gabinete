import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../landing-page/LandingPage";
import NotFound from "../not-found-page/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
