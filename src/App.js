import { useState } from "react";
import Counter from "./components/Counter";
import CounterLiftingStateUp from "./components/CounterLiftingStateUp";

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(state => state + 1)
  }

  return (
    <div className="App">
      <h2>Componente comum de Contador</h2>

      <Counter />

      <h2>Componentes usando Lifting State Up</h2>

      <CounterLiftingStateUp count={count} increment={increment} />
    </div>
  );
}

export default App;
