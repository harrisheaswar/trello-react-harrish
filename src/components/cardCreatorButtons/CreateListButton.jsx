import {
  CardContent,
  Typography,
  Card,
  TextField,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import { createNewList } from "../../services/apiCalls";

const CreateListButton = ({ setIsEditing, isEditing, listsUpdate, lists }) => {
  const handleCreateList = async (e) => {
    try {
      const newList = await createNewList(lists[0], e.target.listName.value);
      listsUpdate((prevLists) => [...prevLists, newList]);
    } catch (err) {
      toast.error("Error: Could not create new list");
    }
  };

  return (
    <Card
      sx={{
        width: "20rem",
        height: "auto",
        textAlign: "center",
        color: "white",
        position: "relative",
        zIndex: 2,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#eeeeee",
          boxShadow: "0 0 5px rgba(128, 128, 128, 0.8)",
          border: "1px solid rgba(128, 128, 128, 0.8)",
        },
      }}
      onClick={() => setIsEditing(true)}
    >
      <CardContent>
        <Typography sx={{ color: "black" }}>Create List</Typography>
      </CardContent>
      {isEditing && (
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsEditing(false);
              handleCreateList(e);
            }}
          >
            <TextField
              sx={{
                width: "80%",
                height: "auto",
                marginBottom: "0.5rem",
                backgroundColor: "white",
              }}
              name="listName"
              type="text"
              placeholder="Enter List Name"
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
              Add List
            </Button>
          </form>
        </CardContent>
      )}
      {isEditing && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(false);
          }}
          type="button"
          sx={{
            position: "absolute",
            top: "9.5rem",
            left: "15rem",
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
    </Card>
  );
};

export default CreateListButton;
