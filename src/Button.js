function Button({ clickButton, getAnswer }) {
  function handleClick() {
    clickButton();
    getAnswer();
  }

  return (
    <div>
      <button onClick={handleClick}>Make a decision</button>
    </div>
  );
}

export default Button;
