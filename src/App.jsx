import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  function toggleProducts() {
    setShowProducts(!showProducts);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>React Product Dashboard</h1>

      <button onClick={toggleProducts}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />

      <p>Hello, {name}</p>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
