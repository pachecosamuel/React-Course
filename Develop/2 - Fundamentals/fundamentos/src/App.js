//Components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';

//Styles
import './App.css';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      
      <h1>React Fundamentals</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
      <br />
      <Challenge/>
      <br />
    </div>
  );
}

export default App;
