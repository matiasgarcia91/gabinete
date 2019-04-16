import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import logo from "./logo_baja.png";
import "./HalfHeader.css";

class HalfHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    extraElement: PropTypes.func
  };
  toLanding = () => {
    this.props.history.push("/");
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
          <div onClick={this.toLanding}>
            <img src={logo} alt={""} style={{ width: 150 }} />
          </div>
        </Grid>
        <Grid item xs={4} key={"extraElement"} style={{ textAlign: "end" }}>
          {comp}
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(HalfHeader);
