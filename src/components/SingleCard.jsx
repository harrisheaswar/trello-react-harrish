import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";

import SingleChecklist from "./SingleChecklist";
import { fetchCheckLists } from "../utils/fetchCheckLists";
import CreateChecklistButton from "./cardCreatorButtons/CreateChecklistButton";
import { deleteCard } from "../utils/deleteCard";

const SingleCard = ({ card, setCards }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkLists, setCheckLists] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchCheckLists(card.id, setCheckLists);
  }, [card.id]);

  const handleOpenDialog = () => {
    setIsOpen(true);
    fetchCheckLists(card.id, setCheckLists);
  };
  const handleCloseDialog = () => setIsOpen(false);

  const handleDeleteCard = (e) => {
    setCards((prev) => prev.filter((item) => item.id != e.target.id));
    deleteCard(e.target.id);
  };

  return (
    <>
      <Box onClick={handleOpenDialog}>
        <Card
          id={card.id}
          key={card.id}
          sx={{
            width: "100%",
            height: "auto",
            fontSize: "1.2rem",
            marginY: "0.5rem",
            boxShadow: "inset 0 0 3.5px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
            position: "relative",
            "&:hover": {
              boxShadow: "0 0 10px rgba(128, 128, 128, 0.8)",
              border: "2px solid rgba(128, 128, 128, 0.8)",
            },
          }}
        >
          <CardContent>
            <Typography>{card.name}</Typography>
            <Button
              sx={{
                fontSize: "0.8rem",
                position: "absolute",
                top: 12,
                right: -10,
                color: "gray",
                outline: "none",
                "&:hover": {
                  color: "black",
                  outline: "none",
                  background: "none",
                },
              }}
              id={card.id}
              onClick={handleDeleteCard}
            >
              x
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Dialog open={isOpen} onClose={handleCloseDialog}>
        <DialogTitle>{card.name}</DialogTitle>
        <DialogContent sx={{ width: "600px", height: "1000px" }}>
          <Box sx={{ display: "flex", marginTop: "2rem" }}>
            <Box sx={{ width: "50%", height: "auto" }}>
              {checkLists.map((checklist) => (
                <SingleChecklist
                  key={checklist.id}
                  checklist={checklist}
                  setCheckLists={setCheckLists}
                />
              ))}
            </Box>
            <CreateChecklistButton
              isAdding={isAdding}
              setIsAdding={setIsAdding}
              setCheckLists={setCheckLists}
              card={card}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SingleCard;
