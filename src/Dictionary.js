import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <label>Search for a word...</label>
        <input type="search" onChange={updateKeyword} />
      </form>
    </div>
  );
}
