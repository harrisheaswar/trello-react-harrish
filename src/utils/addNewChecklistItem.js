import axios from "axios";
import { toast } from "react-toastify";
export const addNewChecklistItem = async (name, checklistId, setCheckItems) => {
  let url = `https://api.trello.com/1/checklists/${checklistId}/checkItems`;
  try {
    const res = await axios.post(url, {
      name: name,
      key: import.meta.env.VITE_API_KEY,
      token: import.meta.env.VITE_API_TOKEN,
    });
    setCheckItems((prev) => [...prev, res.data]);
    toast.success("Checklist item created");
  } catch (err) {
    toast.error("Could not create checklist item");
  }
};
