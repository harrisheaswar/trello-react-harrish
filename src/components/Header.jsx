import { AppBar, Box, Toolbar, Button } from "@mui/material";
import TrelloLogo from "../assets/Trello-logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateToBoard = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: "4rem",
          fontSize: "1.5rem",
          display: "flex",

          backgroundColor: "#1c1c1c",
        }}
      >
        <Toolbar>
          <Button
            sx={{
              marginRight: "39vw",
              border: "1px solid white",
              color: "white",
              marginLeft: "1vw",
            }}
            onClick={navigateToBoard}
          >
            All Boards
          </Button>
          <Box sx={{ width: "5rem", height: "100%" }}>
            <img
              src={TrelloLogo}
              style={{ width: "120%", height: "auto", color: "white" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
