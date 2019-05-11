import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#282828",
    width: 200,
    borderRadius: "2px",
    color: "white",
    "&:hover": {
      backgroundColor: "#282828"
    }
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 40,
    paddingRight: 100
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
            <Grid item xs={6} className={classes.buttonContainer}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-start",
                  width: 200
                }}
              >
                <div>Title and button</div>
                <div>Price</div>
              </div>
              <Button
                variant="contained"
                className={classes.button}
                disableRipple
                disableFocusRipple
              >
                ADD TO CART
              </Button>
            </Grid>
            <Grid item xs={6}>
              <div>Description</div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(ProductPage));
