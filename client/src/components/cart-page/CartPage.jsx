import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CartTable from "./CartTable";

import HalfHeader from "../half-header/HalfHeader";

const styles = theme => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  page: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    marginRight: "20px",
    marginLeft: "20px"
  }
});
class Cart extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <HalfHeader title={"SHOP"} />
        <div className={classes.page}>
          <CartTable />
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Cart));
