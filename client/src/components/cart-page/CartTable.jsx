import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Close from "@material-ui/icons/Close";
import _ from "lodash";

const styles = theme => ({
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    display: "flex"
  },
  separator: {
    width: "100%",
    backgroundColor: "#000000",
    height: "2px",
    marginTop: 10,
    marginBottom: 20
  },
  row: {
    display: "flex",
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    alignItems: "center"
  },
  closeIcon: {
    height: 15,
    width: 15,
    color: "#b0b4b6"
  },
  headerLabels: {
    color: "#b0b4b6",
    fontSize: 12
  },
  images: {
    height: 60,
    width: 60
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 25,
    height: 20,
    margin: 0,
    marginTop: -10
  },
  textFieldInput: {
    padding: 3,
    paddingLeft: 8,
    fontSize: 13
  }
});

class CartTable extends PureComponent {
  onQuantityChange = id => event => {
    const value = event.target.value;
    if (!value) return;
    const parsedValue = parseInt(value, 10);
    if (!parsedValue) return;
    this.props.updateQuantity(id, parsedValue);
  };
  render() {
    const { classes, items, deleteFromCart } = this.props;

    const renderCartRow = item => {
      const { id, name, quantity, price, image } = item;
      return (
        <div className={classes.row} key={id}>
          <div style={{ flex: 0.5 }} onClick={() => deleteFromCart(id)}>
            <Close className={classes.closeIcon} />
          </div>
          <div style={{ flex: 1 }}>
            <img src={image} alt={""} className={classes.images} />
          </div>
          <div style={{ flex: 4 }}>{name}</div>
          <div style={{ flex: 1.8 }}>
            <TextField
              id="outlined-bare"
              type="tel"
              InputProps={{
                classes: {
                  input: classes.textFieldInput
                }
              }}
              className={classes.textField}
              defaultValue={quantity}
              margin="normal"
              variant="outlined"
              onChange={this.onQuantityChange(id)}
            />
          </div>
          <div style={{ flex: 2, display: "flex", justifyContent: "flex-end" }}>
            {`$${price}.00`}
          </div>
        </div>
      );
    };

    const subtotalValue = items.reduce(
      (acc, it) => acc + it.price * it.quantity,
      0
    );
    const cartItems = _.sortBy(items, "name");
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <div style={{ flex: 3, fontSize: 15, fontWeight: "light" }}>
            THING
          </div>
          <div className={classes.headerLabels} style={{ flex: 1 }}>
            QTY
          </div>
          <div
            className={classes.headerLabels}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 15
            }}
          >
            PRICE
          </div>
        </div>
        <div className={classes.separator} />
        {cartItems.map(it => renderCartRow(it))}
        <div className={classes.separator} />
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}
        >
          {`Subtotal    $${subtotalValue}.00`}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CartTable);
