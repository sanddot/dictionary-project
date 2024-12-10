import React from "react";
import Meaning from "./Meaning";
import "./results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="word">{props.results.word}</h2>
          <h5>
            <em>{props.results.phonetic}</em>
          </h5>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
