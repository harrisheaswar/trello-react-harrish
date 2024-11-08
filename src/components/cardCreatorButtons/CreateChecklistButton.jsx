import { TextField, Box, Button } from "@mui/material";
import { createNewChecklist } from "../../services/apiCalls";
import { toast } from "react-toastify";

const CreateChecklistButton = ({
  isAdding,
  setIsAdding,
  setCheckLists,
  card,
}) => {
  const handleAddNewChecklist = async (e) => {
    try {
      let newChecklist = await createNewChecklist(
        e.target.checklistName.value,
        card.id
      );
      setCheckLists((prev) => [...prev, newChecklist]);
      toast.success("New Checklist created");
      setIsAdding(false);
    } catch {
      toast.error("Error: Could not create new checklist");
    }
  };
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      {!isAdding && (
        <Box
          sx={{
            width: "80%",
            border: "1px solid gray",
            marginTop: "1rem",
            paddingY: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer",
            paddingLeft: "2px",
            fontSize: "1rem",
            marginY: "1rem",
            marginX: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsAdding(true);
          }}
        >
          Add Checklist
        </Box>
      )}
      {isAdding && (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddNewChecklist(e);
            }}
          >
            <TextField
              sx={{
                width: "80%",
                height: "auto",
                marginBottom: "0.5rem",
                backgroundColor: "white",
              }}
              name="checklistName"
              type="text"
              placeholder="Enter Checklist Name"
              variant="outlined"
            />
            <Button
              sx={{
                width: "auto",
                height: "2rem",
                backgroundColor: "black",
                marginTop: "1rem",
              }}
              type="submit"
              variant="contained"
            >
              Add Checklist
            </Button>
          </form>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsAdding(false);
            }}
            type="button"
            sx={{
              position: "absolute",
              top: "5rem",
              left: "13rem",
              color: "gray",
              zIndex: 100,
              "&:hover": {
                color: "black",

                background: "none",
              },
            }}
          >
            x
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CreateChecklistButton;
