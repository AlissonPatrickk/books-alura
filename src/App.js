
import { Box } from "@mui/material";
import Header from "./components/Header/Header"
import Main from "./components/Page/Home/Main"
import "./styles/App.css";

function App() {
  return (
    <Box className="App">
      <Header />
      <Main />
    </Box>
  );
}

export default App;
