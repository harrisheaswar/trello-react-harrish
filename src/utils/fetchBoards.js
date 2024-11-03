import axios from "axios";
export function fetchBoards(setBoards) {
  const fetchData = async () => {
    const data = await axios.get(import.meta.env.VITE_API_BOARDS);
    setBoards(data.data);
  };

  fetchData();
}
