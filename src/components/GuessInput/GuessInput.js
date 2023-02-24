import React from "react";

function GuessInput({handleGuessListAdd}) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length != 5) {
          return;
        }
        handleGuessListAdd(guess);

        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <br />
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          let uppercase = e.target.value.toUpperCase();
          setGuess(uppercase);
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
