import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchCards } from "../utils/fetchCards";
import SingleCard from "./SingleCard";

import CreateCardButton from "./cardCreatorButtons/CreateCardButton";
import { archiveList } from "../utils/archiveList";
const SingleList = ({ list, setLists }) => {
  const [cards, setCards] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  useEffect(() => {
    fetchCards(list.id, setCards);
  }, [list.id]);

  const archiveTheList = (e) => {
    setLists((prev) => prev.filter((item) => item.id != e.target.id));
    archiveList(e.target.id);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "auto",
        marginBottom: "10rem",
      }}
    >
      <Card
        id={list.id}
        key={list.id}
        sx={{
          width: "20rem",
          height: "auto",
          zIndex: -10,
          color: "gray",
          marginRight: "0.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography sx={{ zIndex: 1 }}>{list.name}</Typography>
          <Button
            sx={{
              fontSize: "3rem",
              position: "absolute",
              top: -23,
              right: "0",
              color: "grey",
              "&:hover": {
                color: "black",
                outline: "none",
                background: "none",
              },
            }}
            id={list.id}
            onClick={(e) => {
              archiveTheList(e);
            }}
          >
            -
          </Button>
          {cards.map((card) => (
            <SingleCard key={card.id} card={card} setCards={setCards} />
          ))}
        </CardContent>
        <CreateCardButton
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          setCards={setCards}
          list={list}
        />
      </Card>
    </Box>
  );
};

export default SingleList;
