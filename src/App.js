import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopSongs from "./pages/TopSongs";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<TopSongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
