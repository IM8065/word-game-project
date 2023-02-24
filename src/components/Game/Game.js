import React from "react";
import {sample} from "../../utils";
import {WORDS} from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [won, setWin] = React.useState(false);

  function handleGuessListAdd(guess) {
    let newArray = [...guessList, guess];

    setGuessList(newArray);
  }

  function displayBanner() {
    if (won || guessList.length === NUM_OF_GUESSES_ALLOWED) {
      return <Banner didWin={won} guesses={guessList.length} answer={answer} />;
    }
    return undefined;
  }
  return (
    <>
      <GuessResults guessList={guessList} answer={answer} setWin={setWin} />
      <GuessInput handleGuessListAdd={handleGuessListAdd} />
      {displayBanner()}
    </>
  );
}

export default Game;
