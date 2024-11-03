import axios from "axios";
import { toast } from "react-toastify";
export const archiveList = async (listId) => {
  let url = `https://api.trello.com/1/lists/${encodeURIComponent(
    listId
  )}/closed?key=${encodeURIComponent(
    import.meta.env.VITE_API_KEY
  )}&token=${encodeURIComponent(import.meta.env.VITE_API_TOKEN)}`;

  try {
    await axios.put(url, { value: true });
    toast.success("Successfully archived the list");
  } catch (err) {
    toast.error("Error could not archive the list");
  }
};
