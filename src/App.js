import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopAlbums from "./pages/TopAlbums";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<TopAlbums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
