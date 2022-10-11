import logo from './logo.svg';
import './App.css';
import Form from "./Form";
function App() {
  const name = "Matt";
  const age = 29;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <Form />
      </header>
    </div>
  );
}

export default App;
