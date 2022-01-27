import React, { useState } from "react";
import Button from "./Button";
import Decision from "./Decision";

const decisions = ["Яблоко", "Банан"];

function DecisionMaker() {
  let [isClicked, setIsClicked] = useState(false);

  const clickButton = () => {
    setIsClicked(true);
    console.log(isClicked);
  };
  // if (button is clicked){
  //   return (component <Decision />);
  // }else{}
  return (
    <div>
      <Button clickButton={clickButton} />
      <Decision />
    </div>
  );
}

export default DecisionMaker;
