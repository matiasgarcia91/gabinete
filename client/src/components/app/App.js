import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../landing-page/LandingPage";
import ShopPage from "../shop-page/ShopPage";
import NotFound from "../not-found-page/NotFound";
import ProductPage from "../product-page/ProductPage";
import CartPage from "../cart-page/CartPage";
import CheckoutPage from "../checkout-page/CheckoutPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/product" exact component={ProductPage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
