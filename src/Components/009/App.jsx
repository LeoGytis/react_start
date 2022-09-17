import logo from './logo.svg';
import './App.css';
import Hello from './Components/009/Hello';
import Kurmis from './Components/009/Kurmis';

function App() { // This is a component has to start with big letter
  return (
    <div className="App">
      <header className="App-header">
      <Hello colorProp="yellowgreen" bgProp="crimson"></Hello>
      <Hello colorProp="skyblue" bgProp="grey"/>
       <Kurmis number={4}></Kurmis>      {/* add {} to send prop as a number */}
      </header>
    </div>
  );
}

export default App;
