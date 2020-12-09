import React, { useState } from "react";
import "./styles.css";

var musicsDictionary = {
  Classical: [
    { name: "Rossini – Overture from William Tell", rating: "4/5" },
    { name: "Puccini – 'Nessun Dorma' from Turandot", rating: "4.5/5" },
  ],
  Soul: [
    { name: "The tracks of my tears", rating: "4/5" },
    { name: "Everyday people", rating: "5/5" },
  ],
  Rock: [
    { name: "Born to be wild", rating: "3.5/5" },
    { name: "Smoke on the water", rating: "3/5" },
  ],
  Pop: [
    { name: "Shape of you", rating: "4.5/5" },
    { name: "Believer", rating: "5/5" },
  ],
};

var genresWeHave = Object.keys(musicsDictionary);

export default function App() {
  const [song, setSong] = useState([
    { name: "Rossini – Overture from William Tell", rating: "4/5" },
    { name: "Puccini – 'Nessun Dorma' from Turandot", rating: "4.5/5" },
  ]);

  function clickHandlerForButton(event, genre) {
    // musicsDictionary[genre].map((i) => console.log(i)); //this is to print and check whether we are able access the created dictionary or not
    // console.log(event);
    // event.target.style.fontWeight = "bold";
    setSong(musicsDictionary[genre]);
  }

  return (
    <main className="App">
      <header>
        <h1>🎵 Musics</h1>
        <small style={{ display: "block", margin: "1rem" }}>
          Checkout my favourite musics. Select genre to get started
        </small>
      </header>

      {/* This section to show the buttons for all genres we have - button for each genre */}
      <section>
        {genresWeHave.map((genre) => (
          <button
            key={genre}
            onClick={(event) => clickHandlerForButton(event, genre)}
          >
            {genre}
          </button>
        ))}
      </section>

      <hr />

      {/* this section to show songs belong to the particular genre as output */}
      <section>
        {song.map((s) => (
          <div key={s.name} className="output">
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "1rem" }}>{s.name}</p>
              <small>{s.rating}</small>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
