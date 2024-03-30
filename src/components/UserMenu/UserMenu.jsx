import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      {/* <Box sx={{ flexGrow: 1, width: "300px" }}> */}
      {/* <AppBar position="static"> */}
      <Typography
        variant="h8"
        component="div"
        sx={{ flexGrow: 0.3, color: "silver" }}
      >
        Welcome, {user.name}
      </Typography>

      <Button
        // variant=""
        type="button"
        startIcon={<LogoutIcon fontSize="small" />}
        onClick={() => {
          dispatch(logOut());
        }}
        // color="white"
        // color="ochre"
      >
        Logout
      </Button>
      {/* </AppBar> */}
      {/* </Box> */}

      <p className={css.username}></p>
    </div>
  );
}
