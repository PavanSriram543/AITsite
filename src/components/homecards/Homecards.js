import React, { useState } from "react";
import Cards from "./cards/Cards";
import "./homecards.scss";

function Homecards() {
  const [testcards, setTestCars] = useState([
    {
      developer: "UI developer",
      id: 1,
    },
    {
      developer: "ANGULAR developer",
      id: 2,
      color: "card-2",
    },
    {
      developer: "REACTJS developer",
      id: 3,
    },
  ]);
  return (
    <div className="m-0 h-card plr">
      {testcards.map((card) => (
        <Cards key={card.id} color={card.color} developer={card.developer} />
      ))}
    </div>
  );
}

export default Homecards;
