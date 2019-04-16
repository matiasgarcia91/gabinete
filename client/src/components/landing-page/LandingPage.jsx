import React, { PureComponent } from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  landingContainer: {
    display: "flex",
    width: "100%",
    height: "100%"
  },
  sides: {
    height: "100%",
    width: "100%"
  },
  leftSide: {
    background: "#f9eb63"
  },
  leftText: {
    position: "relative",
    width: "200px",
    left: "150px",
    top: "250px",
    color: "#5e6dcf",
    fontSize: "80px"
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    textAlign: "end"
  },
  rightText: {
    width: "200px",
    position: "relative",
    right: "180px",
    bottom: "250px",
    fontSize: "80px"
  }
});

class LandingPage extends PureComponent {
  toShop = () => {
    this.props.history.push("/shop");
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landingContainer}>
        <div
          className={classNames(classes.sides, classes.leftSide)}
          onClick={this.toShop}
        >
          <div className={classes.leftText}>SHOP</div>
        </div>
        <div className={classNames(classes.sides, classes.rightSide)}>
          <div className={classes.rightText}>STUDIO</div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(LandingPage));
