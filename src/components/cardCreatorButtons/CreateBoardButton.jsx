import { createNewBoard } from "../../services/apiCalls";
import { toast } from "react-toastify";
import {
  CardContent,
  Typography,
  Card,
  TextField,
  Button,
} from "@mui/material";

const CreateBoardButton = ({ setIsEditing, isEditing, boardsUpdate }) => {
  const handleCreateBoard = async (boardName) => {
    try {
      let newBoard = await createNewBoard(boardName);
      boardsUpdate((prev) => [...prev, newBoard]);
      toast.success("Created a new board");
    } catch {
      toast.error("Error could not create new board");
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
        },
      }}
      onClick={() => setIsEditing(true)}
    >
      <CardContent>
        <Typography
          sx={{
            color: "black",
          }}
        >
          Create Board
        </Typography>
      </CardContent>
      {isEditing && (
        <CardContent>
          <form
            onSubmit={(e) => {
              setIsEditing(false);
              e.preventDefault();
              handleCreateBoard(e.target.boardName.value);
            }}
          >
            <TextField
              sx={{
                width: "80%",
                height: "auto",
                marginBottom: "0.5rem",
                backgroundColor: "white",
              }}
              name="boardName"
              type="text"
              placeholder="Enter Board Name"
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
              Add Board
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

export default CreateBoardButton;
