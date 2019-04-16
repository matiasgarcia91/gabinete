import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HalfHeader from "../half-header/HalfHeader";
import "./ShopPage.css";
import testImg from "./a.jpg";

const styles = theme => ({
  items: {
    textAlign: "center"
  }
});

class Shop extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className="shopContainer">
        <HalfHeader title={"SHOP"} />
        <div className="page">
          <Grid container spacing={40}>
            {[0, 1, 2, 3, 4, 5].map(value => (
              <Grid key={value} item xs={4} className={classes.items}>
                <div onClick={() => console.log(`clicked item! ${value}`)}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={testImg}
                    alt={""}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Shop));
