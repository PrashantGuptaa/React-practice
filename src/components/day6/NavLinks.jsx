import { NavLink } from "react-router-dom";

const NavLinkComponent = () => {
  const activeLink = {
    color: "red",
  };
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <NavLink
        to="/contact-us"
        style={({ isActive }) => (isActive ? activeLink : null)}
      >
        Contact us
      </NavLink>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeLink : null)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeLink : null)}
      >
        About
      </NavLink>
    </div>
  );
};

export default NavLinkComponent;
