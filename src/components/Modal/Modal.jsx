import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export default function ModalContact({ contact, close }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success("Contact was deleted");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f2f1f0",
      }}
    >
      <Box
        sx={{
          border: "1.5px solid #a2a3a3",
          // backgroundColor: "#f2f1f0",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            color: "red",
            textAlign: "center",
            backgroundColor: "silver",
            border: "1px solid #a2a3a3",
            borderRadius: "5px",
            padding: "4px",
            marginBottom: "30px",
          }}
        >
          Are you sure you want to delete the contact {contact.name}?
        </Typography>

        <Box
          sx={{
            display: " flex",
            justifyContent: "space-evenly",
            // gap: "20px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#e36f71",
              width: "100px",
              transition: "transform 600ms",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "red",
              },
            }}
            onClick={handleDelete}
          >
            Yes
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              paddingInline: "30px",
              backgroundColor: "primary.light",
              width: "100px",
              transition: "transform 600ms",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={close}
          >
            No
          </Button>
        </Box>
      </Box>
      <Toaster />
    </Box>
  );
}
