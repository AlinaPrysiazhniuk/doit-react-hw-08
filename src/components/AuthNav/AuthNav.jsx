import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AuthNav() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <NavLink
        to="/register"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            color: "#737270",
            fontWeight: "600",
          }}
        >
          Register
        </Typography>
      </NavLink>
      <NavLink
        to="/login"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            color: "#737270",
            fontWeight: "600",
          }}
        >
          LogIn
        </Typography>
      </NavLink>
    </Box>
  );
}
