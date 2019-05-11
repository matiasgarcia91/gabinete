import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CartTable from "./CartTable";

import HalfHeader from "../half-header/HalfHeader";
import { deleteFromCart } from "../../actions/cartActions";

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
    const { classes, cartItems, deleteFromCart } = this.props;
    return (
      <div className={classes.container}>
        <HalfHeader title={"CART"} />
        <div className={classes.page}>
          <CartTable items={cartItems} deleteFromCart={deleteFromCart} />
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
  deleteFromCart: id => dispatch(deleteFromCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledPage);
