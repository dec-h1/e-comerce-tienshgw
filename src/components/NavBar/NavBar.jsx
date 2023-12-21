/* eslint-disable no-unused-vars */
import React from "react";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: 'yellow',
        height: "10vh",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",

        }}
      >
        <li style={{ color: "white", listStyle: "none" }}>
          <a href="https://www.google.com" style={{textDecoration:'none'}}>Inicio</a>
        </li>
        <li style={{ color: "white", listStyle: "none" }}>
          <a href="https://www.google.com"style={{textDecoration:'none'}}>About</a>
        </li>
        <li style={{ color: "white", listStyle: "none" }}>
          <a href="https://www.google.com"style={{textDecoration:'none'}}>Contact</a>
        </li>
        <li>
          <CardWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
