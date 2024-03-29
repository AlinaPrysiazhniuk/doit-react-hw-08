import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h2>Please log in</h2>
      <LoginForm />
      <h3>Dont have account?</h3>
      <Link to="/register">Register</Link>
    </div>
  );
}
