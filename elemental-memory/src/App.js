import "./App.css";
import { useState } from "react";
import SingleCard from "./component/SingleCard";

const cardImages = [
  { src: "/Img/Air.png" },
  { src: "/Img/Dark.png" },
  { src: "/Img/Earth.png" },
  { src: "/Img/Fire.png" },
  { src: "/Img/Light.png" },
  { src: "/Img/Water.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // SHUFFLE CARDS
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Elemental Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
