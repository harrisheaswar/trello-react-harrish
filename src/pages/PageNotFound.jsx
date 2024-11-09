import { Box } from "@mui/system";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        fontSize: "6rem",
        justifyContent: "center",
      }}
    >
      Error 404 : Page Not Found
    </Box>
  );
};

export default PageNotFound;
