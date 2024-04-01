// import { useState, useEffect } from "react";
// import css from "./Loader.module.css";

// export default function Loader({ children }) {
//   const [dots, setDots] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((dots) => (dots.length < 3 ? dots + "." : ""));
//     }, 250);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <p className={css.text}>
//       <b>
//         {children}
//         {dots}
//       </b>
//     </p>
//   );
// }

import { FadeLoader } from "react-spinners";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";
// import style from "./Loader.module.css";

export default function Loader() {
  return (
    <Backdrop open={true} style={{ zIndex: 9999, color: "#fff" }}>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
        }}
      >
        <FadeLoader color="#36d7b7" />
      </Box>
    </Backdrop>
  );
}
