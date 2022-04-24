import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  const [fetchedCharacters, setFetchedCharacters] = useState([]);

  const loadCharacter = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setFetchedCharacters(data.results));
  };

  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home characters={fetchedCharacters} />} />
        <Route
          path="/details/:id"
          element={<Details characters={fetchedCharacters} />}
        />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
