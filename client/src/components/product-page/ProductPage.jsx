import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HalfHeader from "../half-header/HalfHeader";
import testImg from "../shop-page/a.jpg";

const styles = theme => ({
  items: {
    textAlign: "center"
  },
  images: {
    width: "100%",
    height: "100%"
  }
});

class ProductPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className="shopContainer">
        <HalfHeader title={"SHOP"} />
        <div className="page">
          <Grid container>
            <Grid xs={6}>
              <div>
                <img src={testImg} alt={""} className={classes.images} />
              </div>
            </Grid>
            <Grid xs={6}>
              <div>
                <img src={testImg} alt={""} className={classes.images} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ProductPage));
