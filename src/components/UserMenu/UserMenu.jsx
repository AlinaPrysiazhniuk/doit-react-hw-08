import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>

      <Button
        variant="outlined"
        type="button"
        startIcon={<LogoutIcon fontSize="small" />}
        onClick={() => {
          dispatch(logOut());
        }}
        // color="ochre"
      >
        Logout
      </Button>
    </div>
  );
}
