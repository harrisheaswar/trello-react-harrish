import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { fetchBoards } from "./utils/fetchBoards";
import BoardsPage from "./pages/BoardsPage";
import MainLayout from "./layouts/MainLayout";
import ListsPage from "./pages/ListsPage";
import PageNotFound from "./pages/PageNotFound";
function App() {
  const [boards, setBoards] = useState([]);
  const [lists, setLists] = useState([]);

  const boardsUpdate = (newBoard) => {
    setBoards(newBoard);
  };

  const listsUpdate = (newList) => {
    setLists(newList);
  };
  useEffect(() => {
    fetchBoards(boardsUpdate, boards);
  }, [boards]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <BoardsPage
              boardsUpdate={boardsUpdate}
              boards={boards}
              listsUpdate={listsUpdate}
              lists={lists}
            />
          }
        />
        <Route
          path="/boards/:id"
          element={<ListsPage lists={lists} listsUpdate={listsUpdate} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
