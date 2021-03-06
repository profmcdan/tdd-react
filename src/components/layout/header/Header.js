import React from "react";
import "./styles.scss";
import Logo from "../../../assets/graphics/fish-logo.jpg";

const Header = props => (
  <header className="header-component" data-test="header-component">
    <div className="wrap">
      <div className="logo">
        <img className="logo-img" data-test="logo-img" src={Logo} alt="logo" />
      </div>
    </div>
  </header>
);

export default Header;
