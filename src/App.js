//import { Counter } from "./features/counter/Counter";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Footer from "./components/Footer";

function App() {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that access to
  }
});

export default App;
