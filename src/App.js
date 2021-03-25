import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardColumns from "react-bootstrap/CardColumns";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  function handlePage(direction) {
    const url = pokemon[direction];
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setPokemon(result);
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        );
    }
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then(
        (result) => {
          setPokemon(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  let bodyText;
  if (error) {
    bodyText = (
      <div className="App">
        <div>Error: {error.message}</div>
      </div>
    );
  } else if (!isLoaded) {
    bodyText = <div>Loading...</div>;
  } else {
    bodyText = (
      <div className="App">
        <CardColumns style={{ columnCount: 5 }}>
          {pokemon.results.map((onePokemon, i) => (
            <div key={i}>
              <Card pokemon={onePokemon} />
            </div>
          ))}
        </CardColumns>
        <div>
          <button onClick={(e) => (e.preventDefault(), handlePage("previous"))}>
            Previous
          </button>
          <button onClick={(e) => (e.preventDefault(), handlePage("next"))}>
            Next
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <header>Pokemon Cards</header> {bodyText}
    </div>
  );
}

export default App;
