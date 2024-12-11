import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    //console.log(response.data);
    setResults(response.data);
  }
  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation https://www.shecodes.io/learn/apis/dictionary/
    let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //documentation https://www.shecodes.io/learn/apis/images
    let SheCodesImagesApiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
    let imagesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${SheCodesImagesApiKey}`;
    axios.get(imagesUrl).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>What word do you want to look up?</label>
            <input
              type="search"
              onChange={updateKeyword}
              autoFocus={true}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunrise, world, vacation...
          </div>
        </section>
        <div className="row">
          <div className="col-3">
            <Photos photos={photos} />
          </div>
          <div className="col-9">
            <Results results={results} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
