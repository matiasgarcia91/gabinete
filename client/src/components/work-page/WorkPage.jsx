import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import HalfHeader from "../half-header/HalfHeader";
import testImg from "./slowdown.png";

import "./work-page.css";

const styles = theme => ({
  container: {
    width: "100%",
    height: "100%"
  },
  imagesContainer: {
    height: 500,
    width: 500,
    position: "absolute",
    zIndex: 0
  },
  images: {
    maxWidth: "100%",
    height: "auto"
  },
  page: {
    zIndex: 1,
    display: "flex",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "space-between",
    height: "100%"
  },
  leftSide: {
    zIndex: 1,
    marginTop: 120,
    marginLeft: 60,
    height: 600,
    display: "inline-block",
    justifyContent: "center"
  }
});

class WorkPage extends PureComponent {
  state = {
    topPos: 175,
    leftPos: 600
  };
  changeImage = () => {
    const topPos = 70 + Math.random() * (500 - 70);
    const leftPos = 20 + Math.random() * (885 - 20);
    this.setState({ leftPos, topPos });
  };

  render() {
    const { topPos, leftPos } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <HalfHeader title={"WORK"} />
        <div
          className={classes.imagesContainer}
          style={{ top: topPos, left: leftPos }}
        >
          <img className={classes.images} src={testImg} alt={""} />
        </div>
        <div className={classes.page}>
          <div className={classes.leftSide}>
            <div className="options" onMouseEnter={this.changeImage}>
              SLOWDOWN STUDIOS
            </div>
            <br />
            <div className="options" onMouseEnter={this.changeImage}>
              MALAFAMA
            </div>
            <br />
            <div className="options" onMouseEnter={this.changeImage}>
              MARIONETTE
            </div>
            <br />
            <div className="options" onMouseEnter={this.changeImage}>
              KIF
            </div>
            <br />
            <div className="options" onMouseEnter={this.changeImage}>
              EGO
            </div>
            <br />
            <div className="options" onMouseEnter={this.changeImage}>
              EVERPRESS
            </div>
            <br />
            <div className="options" onMouseEnter={this.changeImage}>
              ASENCIO
            </div>
            <br />
          </div>
          <div>menu</div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(WorkPage));
