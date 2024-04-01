import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
// import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function Login() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Box>
      <Box
        sx={{
          marginTop: "10px",
          backgroundColor: "#f2f1f0",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#524f4e",
            fontSize: "22px",
            marginY: "8px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
            textTransform: "uppercase",
          }}
        >
          Log in <LoginIcon sx={{ fontSize: "30px" }} />
        </Typography>
      </Box>
      {error && <Error>Login error! Please, try again!</Error>}
      <LoginForm />
      <Box
        sx={{
          marginTop: "10px",
          backgroundColor: "#f2f1f0",
          padding: "15px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          // gap: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            color: "#524f4e",
          }}
        >
          Don't have account?
        </Typography>
        <Link
          component="button"
          variant="body1"
          underline="none"
          to="/register"
          style={{
            display: "flex",
            gap: "10px",
            textDecoration: "none",
            textTransform: "uppercase",
            color: "#2a8ac9",
          }}
        >
          <ArrowCircleRightSharpIcon />
          Register
        </Link>
      </Box>
      {loading && <Loader />}
    </Box>
  );
}
