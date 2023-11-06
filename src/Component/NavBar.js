import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      style={{ justifyContent: "space-evenly" }}
    >
      <NavLink
        to="/"
        className="nav-link"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "aquamarine" : "white",
          };
        }}
      >
        <i className="fa fa-clock fa-2x"></i>
      </NavLink>

      <NavLink
        to="/stopwatch"
        className="nav-link"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "aquamarine" : "white",
          };
        }}
      >
        <i className="fa fa-stopwatch fa-2x"></i>
      </NavLink>
    </Navbar>
  );
}

export default NavBar;
