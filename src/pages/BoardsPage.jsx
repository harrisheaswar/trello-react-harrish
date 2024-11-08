import BoardsList from "../components/BoardsList";

const BoardsPage = ({ boards, boardsUpdate, listsUpdate, lists }) => {
  return (
    <BoardsList
      boardsUpdate={boardsUpdate}
      boards={boards}
      setLists={listsUpdate}
      lists={lists}
    />
  );
};

export default BoardsPage;
