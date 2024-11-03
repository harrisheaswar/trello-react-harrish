import axios from "axios";

export const updateChecklistItem = async (itemId, newState, checklist) => {
  try {
    const checklistItemUrl = `https://api.trello.com/1/cards/${checklist.idCard}/checkItem/${itemId}`;

    await axios.put(checklistItemUrl, {
      state: newState,
      key: import.meta.env.VITE_API_KEY,
      token: import.meta.env.VITE_API_TOKEN,
    });
  } catch (error) {
    console.error("Error updating checklist item on Trello:", error);
  }
};
