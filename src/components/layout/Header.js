import React from "react";
import "./styles.scss";
import Logo from "../../assets/graphics/fish-logo.jpg";

const Header = props => (
  <header>
    <div className="wrap">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  </header>
);

export default Header;
