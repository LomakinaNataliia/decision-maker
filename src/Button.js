// import React from "react";
const decisions = ["Яблоко", "Банан"];

function Button({ clickButton }) {
  function handleClick() {
    clickButton();
    let decision = decisions[Math.floor(Math.random() * decisions.length)];

    console.log(decision);
  }

  return (
    <div>
      <button onClick={handleClick}>Make a decision</button>
    </div>
  );
}

export default Button;
