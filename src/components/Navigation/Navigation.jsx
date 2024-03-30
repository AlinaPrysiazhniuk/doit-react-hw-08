import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      {/* <Box sx={{ flexGrow: 1, width: "300px" }}> */}
      {/* <AppBar position="static"> */}
      <NavLink
        to="/"
        style={{
          fontSize: 20,
          color: "Orange",
          // marginRight: 20,
          textDecoration: "none",
        }}
      >
        <Typography variant="h6" sx={{ flexGrow: 2 }}>
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={{ fontSize: 20, color: "Orange", textDecoration: "none" }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
        </NavLink>
      )}
      {/* </AppBar> */}
      {/* </Box> */}
    </nav>
  );
}
