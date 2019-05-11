import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  container: {
    width: "80%",
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
    marginRight: 15
  }
});

class CartTable extends PureComponent {
  render() {
    const { classes, items, deleteFromCart } = this.props;

    const renderCartRow = item => {
      const { id, name, quantity, price } = item;
      return (
        <div className={classes.row} key={id}>
          <div style={{ flex: 1 }} onClick={() => deleteFromCart(id)}>
            close
          </div>
          <div style={{ flex: 1 }}>image</div>
          <div style={{ flex: 4 }}>{name}</div>
          <div style={{ flex: 4 }}>{quantity}</div>
          <div style={{ flex: 2, display: "flex", justifyContent: "flex-end" }}>
            {price}
          </div>
        </div>
      );
    };
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <div style={{ flex: 3 }}>THING</div>
          <div style={{ flex: 1 }}>QTY</div>
          <div
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
        {items.map(it => renderCartRow(it))}
        <div className={classes.separator} />
      </div>
    );
  }
}

export default withStyles(styles)(CartTable);
