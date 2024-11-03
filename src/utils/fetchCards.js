import axios from "axios";

export const fetchCards = (id, setCards) => {
  const fetchData = async () => {
    if (!id) return;
    try {
      let url = `https://api.trello.com/1/lists/${id}/cards`;
      const res = await axios.get(url, {
        params: {
          key: import.meta.env.VITE_API_KEY,
          token: import.meta.env.VITE_API_TOKEN,
        },
      });
      setCards(res.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  fetchData();

  return null;
};
