import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms!</h2>

      <MyForm user={{
        name: "Samuel", 
        email: "samu@g.com", 
        bio: "I'm a rich professional",
        role: "Admin"
        }}/>
    </div>
  );
}

export default App;
