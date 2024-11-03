import axios from "axios";
import { toast } from "react-toastify";

export const addNewCard = (name, listId, setCards) => {
  const fetchData = async () => {
    let url = "https://api.trello.com/1/cards/";
    const param = {
      key: `${import.meta.env.VITE_API_KEY}`,
      token: `${import.meta.env.VITE_API_TOKEN}`,
      idList: listId,
      name: name,
    };

    try {
      const data = await axios.post(url, param);
      setCards((prev) => [...prev, data.data]);
      toast.success("Card created successfully");
    } catch (err) {
      toast.error("Error could not create new card");
    }
  };
  fetchData();
};
