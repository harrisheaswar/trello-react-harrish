import axios from "axios";
import { toast } from "react-toastify";

export const deleteChecklistItem = async (checklistId, checkItemId) => {
  const url = `https://api.trello.com/1/checklists/${checklistId}/checkItems/${checkItemId}?key=${
    import.meta.env.VITE_API_KEY
  }&token=${import.meta.env.VITE_API_TOKEN}`;

  try {
    axios.delete(url);
    toast.success("Checklist item deleted");
  } catch (err) {
    toast.error("Error: Checklist item was not deleted");
  }
};
