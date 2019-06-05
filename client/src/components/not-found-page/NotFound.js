import React, { Component } from "react";
import "../../Home.css";

class NotFound extends Component {
  componentDidMount() {
    const a = window.location.href;
    console.log(a);
    if (a.includes("https://www.instagram.com/gabinetexquisito/")) {
      window.location.href = "https://www.instagram.com/gabinetexquisito/";
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>404</p>
        </header>
      </div>
    );
  }
}

export default NotFound;
