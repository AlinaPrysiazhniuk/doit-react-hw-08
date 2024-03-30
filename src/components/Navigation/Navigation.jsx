import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ display: "flex", gap: "15px" }}>
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            flexGrow: 2,
            color: "#4f4e4d",
            fontWeight: "600",
          }}
        >
          Home
        </Typography>
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              flexGrow: 2,
              color: "#4f4e4d",
              fontWeight: "600",
            }}
          >
            Contacts
          </Typography>
        </NavLink>
      )}
    </Box>
  );
}
