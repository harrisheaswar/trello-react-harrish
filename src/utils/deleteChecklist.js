import axios from "axios";
import { toast } from "react-toastify";

export const deleteChecklist = async (checklistId) => {
  let url = `https://api.trello.com/1/checklists/${checklistId}?key=${
    import.meta.env.VITE_API_KEY
  }&token=${import.meta.env.VITE_API_TOKEN}`;

  try {
    await axios.delete(url);
    toast.success("Checklist deleted");
  } catch (err) {
    toast.error("Error: Checklist was not deleted");
  }
};
