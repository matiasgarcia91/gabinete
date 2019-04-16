import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import HalfHeader from "../half-header/HalfHeader";
import testImg from "./a.jpg";

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
class Shop extends PureComponent {
  toProduct = id => {
    console.log(`Product ${id}`);
    this.props.history.push("/product");
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <HalfHeader title={"SHOP"} />
        <div className={classes.page}>
          <Grid container spacing={40}>
            {[0, 1, 2, 3, 4, 5].map(value => (
              <Grid key={value} item xs={4} className={classes.items}>
                <div onClick={() => this.toProduct(value)}>
                  <img className={classes.images} src={testImg} alt={""} />
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
