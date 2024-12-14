import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="water" />
        </main>
        <footer>
          Coded by{" "}
          <a href="https://github.com/sanddot" target="_blank" rel="noreferrer">
            Sandra Domeikiene
          </a>
          , hosted on{" "}
          <a
            href="https://check-dictionary-project-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/sanddot/dictionary-project/commits?author=sanddot"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
