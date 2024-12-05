import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            Welcome <br /> to the Dictionary App
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by{" "}
          <a href="https://github.com/sanddot" target="_blank" rel="noreferrer">
            Sandra Domeikiene
          </a>
        </footer>
      </div>
    </div>
  );
}
