import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import MyTitle from './components/MyTitle';

function App() {

  const [name, setName] = useState("Samuel");
  const [available, setNewAvailable] = useState(true);

  const handleAlterName = () => {
    setName("Dif");
  }

  return (
    <div className="App">
      {/* Css global */}

      {/* Css de componente */}
      {/* <MyComponent /> */}

      {/* Css inline */}
      {/* <p style={{
        color: "magenta",
        fontWeight: "bold",
        padding: "20px",
        border: "2px dotted green",
        backgroundColor: "#000"
      }}
      >
        It's my inline css paragraph.
      </p> */}

      {/* Css inline dinâmico */}
      {/* <p style={name === "Samuel" ? { color: "pink" } : { color: "green" }} >Exemplo</p>
      <br /> */}
      {/* <MyComponent handleAlterName={handleAlterName}/> */}

      {/* Aplicação de classes dinâmicas       */}
      {/* <h2 className={available ? "title-1" : "title-2"}>
        We gonna see the dynamic classes in action!
      </h2> */}

      {/* CSS Modules */}
      <MyTitle/>
      <h2>teste scoped</h2>

    </div>
  );
}

export default App;
