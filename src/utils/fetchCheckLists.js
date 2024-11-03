import axios from "axios";

export const fetchCheckLists = (cardId, setCheckLists) => {
  const fetchData = async () => {
    let url = `https://api.trello.com/1/cards/${cardId}/checklists?key=${
      import.meta.env.VITE_API_KEY
    }&token=${import.meta.env.VITE_API_TOKEN}`;
    try {
      const res = await axios.get(url);
      setCheckLists(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
};
