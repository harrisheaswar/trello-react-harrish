import axios from "axios";
import { toast } from "react-toastify";

export const deleteCard = async (cardId) => {
  let url = `https://api.trello.com/1/cards/${cardId}?key=${
    import.meta.env.VITE_API_KEY
  }&token=${import.meta.env.VITE_API_TOKEN}`;

  try {
    await axios.delete(url);
    toast.success("Deleted card");
  } catch (err) {
    toast.error("Could not delete card");
  }
};
