import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CartTable from "./CartTable";
import Button from "@material-ui/core/Button";

import HalfHeader from "../half-header/HalfHeader";
import { deleteFromCart, updateQuantity } from "../../actions/cartActions";

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
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "20px",
    marginLeft: "20px",
    alignItems: "center"
  },
  subtitle: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 15,
    marginTop: 30,
    width: "90%"
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#282828",
    width: 140,
    fontSize: 12,
    borderRadius: "2px",
    color: "white",
    "&:hover": {
      backgroundColor: "#282828"
    }
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
    marginTop: 40
  }
});
class Cart extends PureComponent {
  render() {
    const { classes, cartItems, deleteFromCart, updateQuantity } = this.props;
    return (
      <div className={classes.container}>
        <HalfHeader title={"CART"} />
        <div className={classes.page}>
          <div className={classes.subtitle}>YOUR BAG</div>
          <CartTable
            items={cartItems}
            deleteFromCart={deleteFromCart}
            updateQuantity={updateQuantity}
          />
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => console.log("to checkoout")}
              disableRipple
              disableFocusRipple
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const styledPage = withRouter(withStyles(styles)(Cart));

const mapStateToProps = state => {
  const { cart, products } = state;
  const cartItems = cart.items.map(it => ({
    ...products.shop.find(p => p.id === it.id),
    quantity: it.quantity
  }));
  return {
    cartItems
  };
};

const mapDispatchToProps = dispatch => ({
  deleteFromCart: id => dispatch(deleteFromCart(id)),
  updateQuantity: (id, quantity) => dispatch(updateQuantity(id, quantity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledPage);
