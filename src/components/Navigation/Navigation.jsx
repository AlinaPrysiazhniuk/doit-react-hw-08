import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        style={{
          fontSize: 20,
          color: "red",
          marginRight: 20,
          textDecoration: "none",
        }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={{ fontSize: 20, color: "red", textDecoration: "none" }}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
