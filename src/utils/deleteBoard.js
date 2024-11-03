import axios from "axios";
import { toast } from "react-toastify";
export const deleteBoard = async (boardId) => {
  let url = `https://api.trello.com/1/boards/${boardId}?key=${
    import.meta.env.VITE_API_KEY
  }&token=${import.meta.env.VITE_API_TOKEN}`;

  try {
    await axios.delete(url);
    toast.success("Successfully deleted the board");
  } catch (err) {
    toast.error("Error could not delete the board");
  }
};
