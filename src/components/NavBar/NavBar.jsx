import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        <img src="/img/tiens-Dora-peru.png" alt="logo tiens" />
      </Link>
      <ul>
        <li>
          <Link to="/categoria/suplementos">Suplementos alimenticios</Link>
        </li>
        <li>
          <Link to="/categoria/cuidadoPersonal">Cuidado personal</Link>
        </li>
        <li>
          <Link to="/categoria/belleza">Belleza</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
