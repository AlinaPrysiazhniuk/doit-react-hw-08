// import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <a className={css.link}>Register</a>
      <a className={css.link}>Log In</a>
    </div>
  );
}
