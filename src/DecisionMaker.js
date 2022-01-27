import React, { useState } from "react";
import Button from "./Button";
import Decision from "./Decision";

const decisions = ["Яблоко", "Банан"];

function DecisionMaker() {
  let [isClicked, setIsClicked] = useState(false);
  let [answer, setAnswer] = useState(null);

  const clickButton = () => {
    setIsClicked(true);
    console.log(isClicked);
  };

  const getAnswer = () => {
    let decision = [...answer];
    decision = decisions[Math.floor(Math.random() * decisions.length)];
    console.log(decision);
    setAnswer(decision);
  };

  // if (button is clicked){
  //   return (component <Decision />);
  // }else{}
  return (
    <div>
      <Button clickButton={clickButton} getAnswer={getAnswer} />
      <Decision />
    </div>
  );
}

export default DecisionMaker;
