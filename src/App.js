import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "./Circles.js";

function App() {
  const [color, setColor] = useState("grey");
  const circulos = [
    { id: 0, status: 0 },
    { id: 1, status: 0 },
    { id: 2, status: 0 },
    { id: 3, status: 0 },
    { id: 4, status: 0 },
  ];
  return (
    <>
      <div className="circles-container">
        <header className="circles-container__header">CIRCULOS</header>
        {circulos.map((circulo) => (
          <Circle key={circulo.id} classy="circle" />
        ))}
      </div>
    </>
  );
}

export default App;
