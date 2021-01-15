import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="Shoppies logo" />
      <h1>The Shoppies</h1>
    </div>
  );
}

export default Header;
