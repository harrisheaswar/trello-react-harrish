import { Box, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { createNewChecklistItem } from "../../services/apiCalls";

const CreateChecklistItemButton = ({
  isAdding,
  setIsAdding,
  setCheckItems,
  checklist,
}) => {
  const handleNewChecklistItem = async (e) => {
    try {
      let newChecklistItem = await createNewChecklistItem(
        e.target.checklistItemName.value,
        checklist.id
      );
      setCheckItems((prev) => [...prev, newChecklistItem]);
      setIsAdding(false);
    } catch {
      toast.error("Error: Could not create new checklist item");
    }
  };

  return (
    <>
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
          Add Checklist Item
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
              handleNewChecklistItem(e);
              setIsAdding(false);
            }}
          >
            <TextField
              sx={{
                width: "90%",
                height: "auto",
                marginBottom: "0.5rem",
                backgroundColor: "white",
              }}
              name="checklistItemName"
              type="text"
              placeholder="Enter Checklist Item Name"
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
              Add Checklist Item
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
              marginLeft: "0.5rem",
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
    </>
  );
};

export default CreateChecklistItemButton;
