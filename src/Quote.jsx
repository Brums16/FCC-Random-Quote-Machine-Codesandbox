import buzz from "./buzz.png";
import bowling from "./bowling.png";
import joker from "./joker.png";
import gollum from "./gollum.png";
import killbill from "./killbill.png";
import dory from "./dory.png";
import terminator from "./terminator.png";
import luke from "./luke.png";
import titanic from "./titanic.png";
import casablanca from "./casablanca.png";
import shark from "./shark.png";
import { useState } from "react";
import "./styles.css";

const quotesArray = [
  {
    quote: "May the Force be with you.",
    character: "Luke Skywalker",
    film: "Star Wars: Episode IV - A New Hope",
    release_date: "1977",
    color1: "black",
    color2: "goldenrod",
    image: luke
  },
  // Add more objects here...
  {
    quote: "I'll be back.",
    character: "The Terminator",
    film: "The Terminator",
    release_date: "1984",
    color1: "black",
    color2: "darkred",
    image: terminator
  },
  {
    quote: "You're gonna need a bigger boat!",
    character: "Chief Brody",
    film: "Jaws",
    release_date: "1975",
    color1: "darkcyan",
    color2: "white",
    image: shark
  },
  {
    quote: "Why so serious?",
    character: "The Joker",
    film: "The Dark Knight",
    release_date: "2008",
    color1: "purple",
    color2: "chartreuse",
    image: joker
  },
  {
    quote: "To infinity and beyond!",
    character: "Buzz Lightyear",
    film: "Toy Story",
    release_date: "1995",
    color1: "springgreen",
    color2: "purple",
    image: buzz
  },
  {
    quote: "Hasta la vista, baby.",
    character: "The Terminator",
    film: "Terminator 2: Judgment Day",
    release_date: "1991",
    color1: "black",
    color2: "darkred",
    image: terminator
  },
  {
    quote: "My precious.",
    character: "Gollum",
    film: "The Lord of the Rings: The Two Towers",
    release_date: "2002",
    color1: "darkred",
    color2: "goldenrod",
    image: gollum
  },
  {
    quote: "Here's looking at you, kid.",
    character: "Rick Blaine",
    film: "Casablanca",
    release_date: "1942",
    color1: "white",
    color2: "black",
    image: casablanca
  },
  {
    quote: "I'm king of the world!",
    character: "Jack Dawson",
    film: "Titanic",
    release_date: "1997",
    color1: "navy",
    color2: "white",
    image: titanic
  },
  {
    quote: "Just keep swimming.",
    character: "Dory",
    film: "Finding Nemo",
    release_date: "2003",
    color1: "darkblue",
    color2: "yellow",
    image: dory
  },
  {
    quote: "The dude abides.",
    character: "The dude",
    film: "The Big Lebowski",
    release_date: "1998",
    color1: "saddlebrown",
    color2: "burlywood",
    image: bowling
  },
  {
    quote: "I am gonna kill Bill.",
    character: "The bride",
    film: "Kill Bill Volume 1",
    release_date: "2003",
    color1: "yellow",
    color2: "black",
    image: killbill
  }
  // Add more objects here...
];

export default function Quote() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(Math.floor(Math.random() * quotesArray.length));
  }

  return (
    <>
      <body
        style={{
          backgroundColor: quotesArray[count].color1,
          color: quotesArray[count].color2,
          borderColor: quotesArray[count].color2,
          borderStyle: "solid"
        }}
      >
        <div className="quote-div" id="quote-box">
          <img src={quotesArray[count].image} height={200} />
          {/* remove the first h2 later */}
          <div
            className="quote-text"
            style={{
              backgroundColor: quotesArray[count].color2,
              color: quotesArray[count].color1,
              borderColor: quotesArray[count].color1,
              borderStyle: "solid",
              borderRadius: "8px"
            }}
          >
            <h1 id="text">"{quotesArray[count].quote}"</h1>
            <h3 id="author"> - {quotesArray[count].character}</h3>
            <h4>
              {quotesArray[count].film}, {quotesArray[count].release_date}
            </h4>
          </div>
          <div className="button-div">
            <button
              id="new-quote"
              onClick={handleClick}
              style={{
                backgroundColor: quotesArray[count].color2,
                color: quotesArray[count].color1
              }}
            >
              New Quote
            </button>
          </div>
        </div>

        <footer>
          <a href="twitter.com/intent/tweet" id="tweet-quote">
            Share this quote{" "}
          </a>
        </footer>
      </body>
    </>
  );
}
