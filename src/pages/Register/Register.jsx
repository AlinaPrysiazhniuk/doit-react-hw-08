import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoginIcon from "@mui/icons-material/Login";

export default function Register() {
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
      <RegistrationForm />
    </Box>
  );
}
