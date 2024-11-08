import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import CreateBoardButton from "./cardCreatorButtons/CreateBoardButton";
import { useNavigate } from "react-router-dom";
import { fetchLists } from "../services/apiCalls";
import { toast } from "react-toastify";
import { deleteBoardById } from "../services/apiCalls";
const BoardsList = ({ boardsUpdate, boards, setLists }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const fetchAndSetLists = async (boardId) => {
    try {
      let allLists = await fetchLists(boardId);

      setLists(allLists);
      navigate(`/boards/${boardId}`);
    } catch {
      toast.error("Error: Could not fetch lists for the given board");
    }
  };

  const handleDeleteBoard = async (boardId) => {
    try {
      await deleteBoardById(boardId);
      let updatedBoards = boards.filter((board) => board.id != boardId);
      boardsUpdate(updatedBoards);
      toast.success("Deleted board");
    } catch {
      toast.error("Error could not delete board");
    }
  };

  return (
    <Box
      sx={{
        width: "full",
        height: "95vh",
        backgroundColor: "#3c3c3c",
        zIndex: -100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        paddingX: "1rem",
        paddingY: "1rem",
      }}
    >
      <Box>
        <CreateBoardButton
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          boardsUpdate={boardsUpdate}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {boards.map((board) => (
          <Box
            id={board.id}
            key={board.id}
            sx={{
              marginTop: "2rem",
              marginX: "1rem",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              fetchAndSetLists(board.id);
            }}
          >
            <Card
              sx={{
                width: "20rem",
                height: "8rem",
                zIndex: 1,
                position: "relative",
                color: "white",
                marginRight: "0.5rem",
                backgroundColor: "white",
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
                  border: "2px solid rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <CardContent
                sx={{
                  width: "auto",
                  height: "auto",
                }}
              >
                <Typography
                  sx={{ position: "relative", zIndex: 1, color: "black" }}
                >
                  {board.name}
                </Typography>
                <Button
                  sx={{
                    position: "absolute",
                    zIndex: 100,
                    color: "black",
                    top: 8,
                    right: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteBoard(board.id);
                  }}
                >
                  x
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default BoardsList;
