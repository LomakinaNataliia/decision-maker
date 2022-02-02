import "./Button.css";

function Button({ clickButton, getAnswer }) {
  function handleClick() {
    clickButton();
    getAnswer();
  }

  return (
    <div>
      <button onClick={handleClick}>→ ›жмяк‹ ←</button>
    </div>
  );
}

export default Button;
