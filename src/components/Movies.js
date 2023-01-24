import React from "react";
import { movies } from "../data";

function Movies() {
  const Items = movies.map((item) => (
    <div key={item.title}>
      <h2>{item.title}</h2>
      <p>Time: {item.time} mins</p>
      <ul>{item.genres.map((genre) => (<li key={genre}>{genre}</li>))}</ul>
    </div>
  ));

  return <div> <h1>Movies Page</h1>
    {Items}</div>;
}

export default Movies;
