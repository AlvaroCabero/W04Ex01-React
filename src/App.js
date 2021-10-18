import "./App.css";
import "./Circle.css";

import Circle from "./Circle";

function App() {
  const circulos = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <>
      <div className="circles-container">
        <header className="circles-container__header">
          ooooOOOO---- CIRCULOS ----OOOOoooo
        </header>
        {circulos.map((circulo) => (
          <Circle key={circulo.id} />
        ))}
      </div>
    </>
  );
}

export default App;
