import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import logo from "./logo_baja.png";
import "./HalfHeader.css";

class HalfHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    extraElement: PropTypes.func
  };
  render() {
    const { title, extraElement } = this.props;
    const comp = extraElement ? extraElement() : <div />;
    return (
      <Grid
        container
        style={{ paddingRight: 20, paddingLeft: 20, marginTop: 10 }}
      >
        <Grid item xs={4} key={"title"}>
          <div className="pageTitle">{title}</div>
        </Grid>
        <Grid item xs={4} key={"logo"} style={{ textAlign: "center" }}>
          <img src={logo} alt={""} style={{ width: 150 }} />
        </Grid>
        <Grid item xs={4} key={"extraElement"} style={{ textAlign: "end" }}>
          {comp}
        </Grid>
      </Grid>
    );
  }
}

export default HalfHeader;
