import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Morty</h1>
      </header>
      <content>
      <article className="cards">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="a pic of Morty Smith"
        />
        <h2>Morty Smith</h2>
      </article>
      </content>
      <nav className="nav-container">
      <ul className="nav-list-items">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      </nav>
    </div>
  );
}

export default App;
