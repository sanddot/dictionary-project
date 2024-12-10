import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    //documentation https://www.shecodes.io/learn/apis/dictionary/
    let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label>Search for a word...</label>
        <input type="search" onChange={updateKeyword} autoFocus={true} />
      </form>
      <Results results={results} />
    </div>
  );
}
