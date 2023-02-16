import './App.css';
import BVS from './assets/superVsBat.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h3>Avançado no reactzada pai!</h3>
      
      {/* Imagem no diretório public */}
      <div>
        <img src="/batman.jpg" alt="He's the fucking Batmá!" height={450} width={450} />
      </div>

      {/* Imagem no src */}
      <div>
        <img src={BVS} alt="Batman versus Superman" height={450} width={450} />
      </div>

      <div>
        <ManageData/>
      </div>

      <div>
        <ListRender/>
      </div>
    </div>
  );
}

export default App;
