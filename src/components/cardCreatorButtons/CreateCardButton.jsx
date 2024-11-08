import { toast } from "react-toastify";
import { ButtonBase, Box, TextField, Button } from "@mui/material";
import { createNewCard } from "../../services/apiCalls";
const CreateCardButton = ({ isAdding, setIsAdding, setCards, list }) => {
  const handleAddNewCard = async (e) => {
    try {
      let newCard = await createNewCard(e.target.cardName.value, list);
      setCards((prev) => [...prev, newCard]);
      setIsAdding(false);
    } catch (err) {
      toast.error("Error: Could not create card");
    }
  };
  return (
    <div>
      {!isAdding && (
        <ButtonBase
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
          Add Card
        </ButtonBase>
      )}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        {isAdding && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddNewCard(e);
            }}
          >
            <TextField
              sx={{
                width: "80%",
                height: "auto",
                marginBottom: "0.5rem",
                backgroundColor: "white",
              }}
              name="cardName"
              type="text"
              placeholder="Enter Card Name"
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
              Add Card
            </Button>
          </form>
        )}

        {isAdding && (
          <Button
            onClick={(e) => {
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
        )}
      </Box>
    </div>
  );
};

export default CreateCardButton;
