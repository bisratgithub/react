import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first react page!
          <h2>Voila!</h2>
        </p>
        <p>Are you ready to  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Learn React?
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
