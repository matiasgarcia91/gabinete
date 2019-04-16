import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../landing-page/LandingPage";
import ShopPage from "../shop-page/ShopPage";
import NotFound from "../not-found-page/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;