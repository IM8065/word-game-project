import React from "react";
import Guess from "../Guess/Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants.js";
import {range} from "../../utils.js";

function GuessResults({guessList, answer, setWin}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((el) => {
        return (
          <Guess
            key={el}
            word={guessList[el]}
            answer={answer}
            setWin={setWin}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
