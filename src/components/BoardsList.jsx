import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import CreateBoardButton from "./cardCreatorButtons/CreateBoardButton";
import { useNavigate } from "react-router-dom";
import { fetchLists } from "../utils/fetchLists";
import { deleteBoard } from "../utils/deleteBoard";
const BoardsList = ({ boardsUpdate, boards, setLists }) => {
  const navigate = useNavigate();
  const [boardId, setBoardId] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchLists(boardId, setLists);
  }, [boardId]);

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
              setBoardId(board.id);
              fetchLists(board.id, setLists);
              navigate(`/boards/${board.id}`);
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
                    "&:hover": {
                      color: "black",

                      background: "none",
                    },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteBoard(board.id);
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
