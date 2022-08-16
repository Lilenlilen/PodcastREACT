import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopSongs from "./pages/TopSongs";
import SongsDetails from "./pages/SongsDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<TopSongs />} />
        <Route path="/song/:id" element={<SongsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
