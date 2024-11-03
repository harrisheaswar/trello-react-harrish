import axios from "axios";
export const fetchLists = (id, setLists) => {
  const fetchData = async () => {
    if (!id) return;
    try {
      const url = `https://api.trello.com/1/boards/${id}/lists?key=${
        import.meta.env.VITE_API_KEY
      }&token=${import.meta.env.VITE_API_TOKEN}`;
      const res = await axios.get(url);
      setLists(res.data);
    } catch (error) {
      console.error("Error fetching lists:", error);
    }
  };

  fetchData();
};
