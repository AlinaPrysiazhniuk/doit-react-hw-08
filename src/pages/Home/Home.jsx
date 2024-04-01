import css from "./Home.module.css";
import { Box, List, ListItemText, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          minheight: "calc(100vh - 50px)",
          display: "flex",
          alignitems: "center",
          justifycontent: "center",
          flexDirection: "column",
          border: "12px solid #50a4f2",
          borderRadius: "12px",
          paddingY: "20px",
          paddingX: "40px",
          // backgroundColor: "#bbd5ed",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "primary.dark",
            marginBottom: "10px",
            textDecorationLine: "underline",
          }}
        >
          Welcome to our Contacts Book app!
        </Typography>

        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "20px", color: "#524f4e" }}
        >
          Your reliable assistant in storing and managing your contacts
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            color: "#3b3c3d",
            fontWeight: "600",
          }}
        >
          Why choose our app?
        </Typography>
        <List>
          <ListItemText>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                color: "#3b3c3d",
              }}
            >
              <SecurityIcon />
              <Typography
                sx={{
                  border: "1px solid silver",
                  paddingX: "24px",
                  borderRadius: "5px",
                  backgroundColor: "#e1e3e3",
                  color: "#3b3c3d",
                  fontWeight: "600",
                  paddingY: "5px",
                }}
              >
                Convenience
              </Typography>

              <Box>
                Easily store, update, and quickly find contacts within your
                circle
              </Box>
            </Box>
          </ListItemText>
          <ListItemText>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                color: "#3b3c3d",
              }}
            >
              <SecurityIcon />
              <Typography
                sx={{
                  border: "1px solid silver",
                  paddingX: "25px",
                  paddingY: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#e1e3e3",
                  color: "#3b3c3d",
                  fontWeight: "600",
                }}
              >
                {" "}
                Organization
              </Typography>
              <Box>
                Categorize your contacts into groups or tags for efficient
                management
              </Box>
            </Box>
          </ListItemText>
          <ListItemText>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "#3b3c3d",
              }}
            >
              <SecurityIcon />{" "}
              <Typography
                sx={{
                  border: "1px solid silver",
                  paddingX: "44px",
                  paddingY: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#e1e3e3",
                  color: "#3b3c3d",
                  fontWeight: "600",
                }}
              >
                Security
              </Typography>
              <Box>
                Our app ensures encrypted storage of your data, ensuring its
                confidentiality
              </Box>
            </Box>
          </ListItemText>
        </List>
        <Typography
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            color: "#3b3c3d",
            marginY: " 20px",
            border: "1px solid silver",
            borderRadius: "8px",
            padding: "5px",
          }}
        >
          Start using the Contacts Book today and forget about communication
          misunderstandings!
        </Typography>
        <Typography
          sx={{
            color: "#3b3c3d",
            textAlign: "right",
            border: "1px solid silver",
            borderRadius: "8px",
            padding: "5px",
            textDecoration: "none",
          }}
        >
          <a href="https://github.com/AlinaPrysiazhniuk">
            Author: Alina Prysiazhniuk
          </a>
        </Typography>
      </Box>
    </>
  );
}
