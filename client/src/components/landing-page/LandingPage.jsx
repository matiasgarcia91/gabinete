import React, { PureComponent } from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  landingContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    zIndex: 0
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
  },
  sign: {
    backgroundColor: "black",
    color: "white",
    width: "70%",
    height: 80,
    fontSize: 30,
    zIndex: 2,
    position: "absolute",
    top: 80,
    left: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class LandingPage extends PureComponent {
  toShop = () => {
    this.props.history.push("/shop");
  };

  toStudio = () => {
    this.props.history.push("/studio");
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.landingContainer}>
          <div
            className={classNames(classes.sides, classes.leftSide)}
            onClick={this.toShop}
          >
            <div className={classes.leftText}>SHOP</div>
          </div>
          <div
            className={classNames(classes.sides, classes.rightSide)}
            onClick={this.toStudio}
          >
            <div className={classes.rightText}>STUDIO</div>
          </div>
        </div>
        <div className={classes.sign}>COMING SOON</div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(LandingPage));
