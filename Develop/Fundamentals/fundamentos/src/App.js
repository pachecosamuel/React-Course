//Components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';

//Styles
import './App.css';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      
      <h1>React Fundamentals</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
    </div>
  );
}

export default App;
