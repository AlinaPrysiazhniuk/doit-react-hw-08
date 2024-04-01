import css from "./Error.module.css";
import { Box } from "@mui/material";

export default function Error({ children }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginY: "20px",
        textTransform: "uppercase",
        fontSize: "20px",
      }}
    >
      <p className={css.text}>
        <b>{children}</b>
      </p>
    </Box>
  );
}
