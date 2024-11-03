import React from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";

import SingleList from "./SingleList";
import CreateListButton from "./cardCreatorButtons/CreateListButton";

const AllLists = ({ lists, listsUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        width: "full",
        height: "95vh",
        backgroundColor: "#3c3c3c",
        zIndex: 100,
        position: "relative",
      }}
    >
      {lists.map((list) => (
        <SingleList key={list.id} list={list} setLists={listsUpdate} />
      ))}
      <Box>
        <CreateListButton
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          listsUpdate={listsUpdate}
          lists={lists}
        />
      </Box>
    </Box>
  );
};

export default AllLists;
