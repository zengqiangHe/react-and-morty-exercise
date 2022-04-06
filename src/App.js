import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";

function App() {
  const [character, setCharacter] = useState([]);

  const loadCharacter = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacter(data.results));
  };

  useEffect(() => {
    loadCharacter();
  }, []);
  return (
    <div className="App">
      <Header />
      {character.map((character) => (
            <Cards
              key={character.id}
              image={character.image}
              name={character.name}
            />
          ))}
      <Navigation />
    </div>
  );
}

export default App;
