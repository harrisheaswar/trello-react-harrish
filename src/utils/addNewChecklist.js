import axios from "axios";
import { toast } from "react-toastify";

export const addNewChecklist = async (name, cardId, setCheckLists) => {
  try {
    let url = `https://api.trello.com/1/cards/${cardId}/checklists`;
    const data = await axios.post(url, null, {
      params: {
        name: name,
        key: import.meta.env.VITE_API_KEY,
        token: import.meta.env.VITE_API_TOKEN,
      },
    });

    setCheckLists((prev) => [...prev, data.data]);
    toast.success("Checklist created successfully");
  } catch (err) {
    toast.success("Error could not create checklist");
  }
};
