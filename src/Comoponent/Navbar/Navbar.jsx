import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar md:px-10 ">
      <div className="flex-1">
        <img
          className="h-12"
          src="https://i.ibb.co/Y3gGcjm/Logo.png"
          alt="logo"
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Donation">Donation</NavLink>
          </li>
          <li>
            <NavLink to="/Statistics">Statistics</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
