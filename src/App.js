import logo from './nba.svg';
import './App.css';
import ControlledOpenSelect from './ControlledOpenSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Predict NBA Outcomes
        </p>
      </header>
      {/* create new div for content */}
      <div className="content">
        {/* add ControlledOpenSelect component */}
        <ControlledOpenSelect />
       </div>

    </div>
  );
}

export default App;
