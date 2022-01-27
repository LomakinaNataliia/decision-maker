import React, { useState } from "react";
import Button from "./Button";
import Decision from "./Decision";

const decisions = ["Яблоко", "Банан", "Геральт"];

function DecisionMaker() {
  let [isClicked, setIsClicked] = useState(false);
  let [answer, setAnswer] = useState(null);
  let [previousAnswer, setPreviousAnswer] = useState(null);

  const clickButton = () => {
    setIsClicked(true);
    console.log(isClicked);
  };

  const getAnswer = () => {
    let decision = decisions[Math.floor(Math.random() * decisions.length)];
    while (previousAnswer === decision) {
      decision = decisions[Math.floor(Math.random() * decisions.length)];
    }
    console.log(decision);
    setAnswer(decision);
    setPreviousAnswer(decision);
  };

  return (
    <div>
      <Button clickButton={clickButton} getAnswer={getAnswer} />
      <div> {isClicked ? <Decision answer={answer} /> : null}</div>
    </div>
  );
}

export default DecisionMaker;
