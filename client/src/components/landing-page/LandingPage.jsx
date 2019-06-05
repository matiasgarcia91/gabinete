import React, { PureComponent } from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import "./coming-soon.css";

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
  signContainer: {
    display: "flex",
    flexDirection: "column",
    zIndex: 2,
    position: "absolute",
    top: 70,
    left: "25%"
  },
  sign: {
    width: "70%",
    height: 80,
    fontSize: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  message: {
    width: "70%",
    height: 80,
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  instaLink: {
    textDecoration: "none",
    fontStyle: "italics",
    color: "black"
  }
});

class LandingPage extends PureComponent {
  toShop = () => {
    //this.props.history.push("/shop");
    return;
  };

  toStudio = () => {
    //this.props.history.push("/studio");
    return;
  };

  toInstagram = () => {
    this.props.history.push("/insta");
  };

  render() {
    const { classes } = this.props;
    const createText = () => ({
      __html: `Este sitio esta en construcción, si queres saber acerca de Gabinete Exquisito podes entrar a nuestro <a target='_blank' href={'https://www.instagram.com/gabinetexquisito/'} class="instaLink">Instagram</a> o mandarnos un mail a: gabienteexquisito@gmail.com`
    });
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
        <div className={classes.signContainer}>
          <div className={classes.sign}>Ya vienen los peores de la clase</div>
          <div
            className={classes.message}
            dangerouslySetInnerHTML={createText()}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(LandingPage));
