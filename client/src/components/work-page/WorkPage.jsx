import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import HalfHeader from "../half-header/HalfHeader";
import testImg from "../shop-page/a.jpg";

import "./work-page.css";

const styles = theme => ({
  container: {
    width: "100%",
    height: "100%"
  },
  images: {
    width: "100%",
    height: "100%"
  },
  page: {
    display: "flex",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "space-between",
    height: "100%"
  },
  leftSide: {
    marginTop: 120,
    marginLeft: 60,
    height: 600,
    display: "inline-block",
    justifyContent: "center"
  }
});

class WorkPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <HalfHeader title={"WORK"} />
        <div className={classes.page}>
          <div className={classes.leftSide}>
            <div className="options">SLOWDOWN STUDIOS</div>
            <br />
            <div className="options">MALAFAMA</div>
            <br />
            <div className="options">MARIONETTE</div>
            <br />
            <div className="options">KIF</div>
            <br />
            <div className="options">EGO</div>
            <br />
            <div className="options">EVERPRESS</div>
            <br />
            <div className="options">ASENCIO</div>
            <br />
          </div>
          <div>menu</div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(WorkPage));
