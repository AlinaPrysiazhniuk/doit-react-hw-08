import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{ color: "#4f4e4d", marginRight: "5px", fontSize: "18px" }}
      >
        Welcome,
      </Typography>
      <Typography
        sx={{
          color: "#4f4e4d",
          fontWeight: "500",
          marginRight: "10px",
          textDecorationLine: "underline",
          fontSize: "18px",
        }}
      >
        {user.name}
      </Typography>

      <Button
        sx={{
          fontSize: "16px",
          border: "1px solid #2a8ac9",
          transitionDuration: "600ms",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <LogoutIcon sx={{ fontSize: "25px" }} />
        Logout
      </Button>
    </Box>
  );
}
