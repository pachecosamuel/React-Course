import './App.css';
import { useState, useEffect } from 'react';

// 4 - Custom hook
import { useFetch } from './hooks/useFetch';

function App() {

  const url = "http://localhost:3000/products"

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 1 - Requesting data 
  // it was moved to useFetch

  // 2 - Add products to our "database"
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name: name,
      price,
    };

    // 5 - Refactoring the post
    httpConfig(product, "POST");

    setName("");
    setPrice("");

    /*const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });*/

    // 3 - Carregamento dinâmico
    // const addedProduct = await response.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };


  return (
    <div className="App">
      <h1>Product list</h1>

      {/* 6 - Loading */}
      {loading && <p>Loading data ...</p>}
      {/* 7 - Error */}
      {error && <p>{error}</p>}
      {!error && (<ul>
        {/* 4 - Custom hook e if ternário para verificar se a lista é != null */}
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>)}

      <br />
      <br />

      <div className="add_product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          {/* 7 - State de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}

        </form>
      </div>

    </div>
  );
}

export default App;
