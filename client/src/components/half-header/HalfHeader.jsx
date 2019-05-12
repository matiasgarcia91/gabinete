import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import logo from "./logo_baja.png";

const styles = theme => ({
  headerContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10
  },
  logoContainer: {
    textAlign: "center"
  },
  logo: {
    width: "150px"
  },
  extraElement: {
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
    paddingBottom: 15
  },
  pageTitle: {
    fontSize: "60px"
  }
});

class HalfHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    extraElement: PropTypes.func
  };
  toLanding = () => {
    this.props.history.push("/");
  };
  render() {
    const { title, extraElement, classes } = this.props;
    const comp = extraElement ? extraElement() : <div />;
    return (
      <Grid container className={classes.headerContainer}>
        <Grid item xs={4} key={"title"}>
          <div className={classes.pageTitle}>{title}</div>
        </Grid>
        <Grid item xs={4} key={"logo"} className={classes.logoContainer}>
          <div onClick={this.toLanding}>
            <img src={logo} alt={""} className={classes.logo} />
          </div>
        </Grid>
        <Grid item xs={4} key={"extraElement"} className={classes.extraElement}>
          {comp}
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(HalfHeader));
