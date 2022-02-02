import "./Button.css";

function Button({ clickButton, getAnswer }) {
  function handleClick() {
    // animateButton();
    clickButton();
    getAnswer();
  }

  // function animateButton() {

  // }

  return (
    <div>
      <button onClick={handleClick}>Жмяк</button>
    </div>
  );
}

export default Button;
