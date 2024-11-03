import axios from "axios";
import { toast } from "react-toastify";

export const handleCreateBoard = async (name, boardsUpdate) => {
  const url = "https://api.trello.com/1/boards/";

  try {
    const response = await axios.post(
      url,
      {
        name: name,
        defaultLabels: true,
        defaultLists: true,
      },
      {
        params: {
          key: import.meta.env.VITE_API_KEY,
          token: import.meta.env.VITE_API_TOKEN,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    boardsUpdate((prevBoards) => [...prevBoards, response.data]);
    toast.success("Board created successfully");
  } catch (err) {
    toast.error("Could not create board");
  }
};
