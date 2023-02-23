import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Samuel");

  const handleAlterName = () =>
  {
    setName("Autômato");
  }

  return (
    <div className="App">
      {/* Css global */}
      <h2>React with css!</h2>

      {/* Css de componente */}
      <MyComponent />

      {/* Css inline */}
      <p style={{
        color: "magenta",
        fontWeight: "bold",
        padding: "20px",
        border: "2px solid green",
        backgroundColor: "#000"
      }}
      >
        It's my inline css paragraph.
      </p>

      {/* Css inline dinâmico */}
      <p style={name === "Samuel" ? { color: "pink" } : { color: "green" }} >Exemplo</p>
      <br />
      <button onClick={handleAlterName}>Change name</button>
    </div>
  );
}

export default App;
