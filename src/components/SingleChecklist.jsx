import {
  Typography,
  Box,
  Checkbox,
  LinearProgress,
  Button,
} from "@mui/material";
import { useState } from "react";
import { updateChecklistItemById } from "../services/apiCalls";
import { deleteChecklistById } from "../services/apiCalls";
import CreateChecklistItemButton from "./cardCreatorButtons/CreateChecklistItemButton";
import { deleteChecklistItemById } from "../services/apiCalls";
import { toast } from "react-toastify";

const SingleChecklist = ({ checklist, setCheckLists }) => {
  const [checkItems, setCheckItems] = useState(checklist.checkItems);
  const [isAdding, setIsAdding] = useState(false);

  const calculateCompletionPercentage = () => {
    const completedCount = checkItems.filter(
      (item) => item.state === "complete"
    ).length;
    if ((completedCount / checkItems.length) * 100) {
      return (completedCount / checkItems.length) * 100;
    }
    return 0;
  };

  const handleCheckboxChange = (itemId) => {
    setCheckItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const newState =
            item.state === "complete" ? "incomplete" : "complete";

          updateChecklistItemById(itemId, newState, checklist);
          return {
            ...item,
            state: newState,
          };
        }
        return item;
      })
    );
  };

  const handleDeleteChecklist = (e) => {
    setCheckLists((prev) => prev.filter((item) => item.id != e.target.id));
    toast.success("Checklist deleted");
    deleteChecklistById(e.target.id);
  };

  const handleDeleteChecklistItem = (e) => {
    setCheckItems((prev) => prev.filter((item) => item.id != e.target.id));
    toast.success("ChecklistItem deleted");
    deleteChecklistItemById(checklist.id, e.target.id);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        marginY: "2rem",
        position: "relative",
        outline: "none",
      }}
    >
      <Typography variant="h6">
        <i
          className="fas fa-check-square"
          style={{ color: "gray", marginRight: "1rem" }}
        ></i>
        {checklist.name}
      </Typography>
      <Button
        sx={{
          fontSize: "0.8rem",
          width: "auto",
          top: -35,
          right: -220,
          color: "gray",
          backgroundColor: "#eeeeee",
          outline: "none",
          "&:hover": {
            color: "black",
          },
        }}
        id={checklist.id}
        onClick={handleDeleteChecklist}
      >
        x
      </Button>

      <LinearProgress
        variant="determinate"
        value={calculateCompletionPercentage()}
        sx={{ height: "10px", borderRadius: "5px", my: 2 }}
      />
      <Typography variant="body2" color="textSecondary">
        {Math.round(calculateCompletionPercentage())}% completed
      </Typography>

      {checkItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
            position: "relative",
          }}
        >
          <Checkbox
            checked={item.state === "complete"}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <Typography>{item.name}</Typography>
          <Button
            sx={{
              fontSize: "3rem",
              width: "auto",
              top: -30,
              right: -20,
              color: "gray",
              position: "absolute",
              "&:hover": {
                color: "black",

                background: "none",
              },
            }}
            id={item.id}
            onClick={handleDeleteChecklistItem}
          >
            -
          </Button>
        </Box>
      ))}
      <CreateChecklistItemButton
        isAdding={isAdding}
        setIsAdding={setIsAdding}
        setCheckItems={setCheckItems}
        checklist={checklist}
      />
    </Box>
  );
};

export default SingleChecklist;
