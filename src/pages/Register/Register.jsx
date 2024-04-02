import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function Register() {
  const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <Box>
      <Box
        sx={{
          marginTop: "10px",
          backgroundColor: "#f2f1f0",
          padding: "10px",
          borderRadius: "8px",
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
          Register your account <LoginIcon sx={{ fontSize: "30px" }} />
        </Typography>
      </Box>
      {loading && <Loader />}
      {/* {error && <Error>Registration Error! Please, try again!</Error>} */}

      <RegistrationForm />
    </Box>
  );
}
