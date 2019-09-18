import React from "react";
import { Link } from "react-router-dom";
 
// class component
class Menu extends React.Component {
  render() {
    return (
   

<header>
<nav class="navbar navbar-light bg-light ">
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button"> <Link to="/">Crear Jugador</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/about">Crear torneo</Link></button>
  </form>
</nav>
</header>
    );
  }
}
 
export default Menu;

