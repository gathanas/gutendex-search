import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookListScreen from "./components/BookListScreen";
import DetailsScreen from "./components/DetailsScreen";
import SelectedBookWrapper from "./components/utils/SelectedBookWrapper";

function App() {
  return (
    <BrowserRouter>
    <SelectedBookWrapper>
      <Routes>
        <Route path="/" element={<BookListScreen />} />
        <Route
          path="/books/:id"
          element={<DetailsScreen />}
        />
      </Routes>
      </SelectedBookWrapper>
    </BrowserRouter>
  );
}

export default App;
