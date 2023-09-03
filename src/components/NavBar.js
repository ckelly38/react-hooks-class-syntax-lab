import { render } from "@testing-library/react";
import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
    );
  }
}

export default NavBar;
