// import React from "react";

function Button() {
  const decisions = ["Яблоко", "Банан"];

  function handleClick() {
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
