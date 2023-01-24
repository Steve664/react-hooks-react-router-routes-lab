import React from "react";
import { directors } from "../data";

function Directors() {
  const Items = directors.map((item) => (
    <div key={item.name}>
      <h2>{item.name}</h2>
      <ul>{item.movies.map((movie) => (<li key={movie}>{movie}</li>))}</ul>
    </div>
  ));

  return <div> <h1>Directors Page</h1>
    {Items}</div>;
}

export default Directors;
