import React from "react";
import {range} from "../../utils.js";
import {checkGuess} from "../../game-helpers";

function Guess({word, answer, setWin}) {
  let result = checkGuess(word, answer);
  if (result) {
    checkWin(result);
  }

  function checkWin(result) {
    let won = false;
    // for (let element in result) {
    //   if (result[element].status != "correct") {
    //     won = false;
    //   }
    // }
    // if (!result) {
    //   won = false;
    // }

    won = result.every((el) => el.status === "correct");
    if (won) {
      setWin(won);
    }
  }

  return (
    <p className="guess">
      {range(5).map((el) => {
        return (
          <span key={el} className={`cell ${result ? result[el].status : ""}`}>
            {word ? word[el] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
