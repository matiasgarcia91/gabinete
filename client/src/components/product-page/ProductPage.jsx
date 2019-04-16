import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HalfHeader from "../half-header/HalfHeader";
import testImg from "../shop-page/a.jpg";

const styles = theme => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  items: {
    textAlign: "center"
  },
  images: {
    width: "100%",
    height: "100%"
  },
  page: {
    marginRight: "20px",
    marginLeft: "20px"
  }
});

class ProductPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <HalfHeader title={"SHOP"} />
        <div className={classes.page}>
          <Grid container>
            <Grid item xs={6}>
              <div>
                <img src={testImg} alt={""} className={classes.images} />
              </div>
            </Grid>
            <Grid item xs={6}>
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
