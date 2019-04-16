import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends PureComponent {
  toShop = () => {
    this.props.history.push("/shop");
  };
  render() {
    return (
      <div className="landingContainer">
        <div className="sides leftSide" onClick={this.toShop}>
          <div className="leftText">SHOP</div>
        </div>
        <div className="sides rightSide">
          <div className="rightText">STUDIO</div>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
