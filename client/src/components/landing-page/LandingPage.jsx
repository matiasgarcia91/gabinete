import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="sides leftSide">
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
