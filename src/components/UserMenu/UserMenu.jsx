import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h7" sx={{ color: "#4f4e4d", marginRight: "10px" }}>
        Welcome, {user.name}
      </Typography>

      <Button
        type="button"
        startIcon={<LogoutIcon fontSize="small" />}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>

      <p className={css.username}></p>
    </Box>
  );
}
