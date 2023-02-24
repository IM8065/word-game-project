import React from "react";

function Banner({didWin, guesses, answer}) {
  return (
    <>
      {didWin ? (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses} guesses</strong>.
          </p>
        </div>
      ) : (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
