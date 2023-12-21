import React from 'react'
import "./Header.css"

import img from "./frutasMA.png"
const Header = (props) => {
  return (
    <div className="Header">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <img src={img} alt="logo-fruits"/>
    </div>
  );
};

export default Header
