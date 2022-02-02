import "./App.css";
import DecisionMaker from "./DecisionMaker";

function App() {
  // let buttons = document.getElementsByClassName("button"),
  //   forEach = Array.prototype.forEach;
  // forEach.call(buttons, function (b) {
  //   b.addEventListener("click", addElement);
  // });

  // function addElement() {
  //   let addDiv = document.createElement("div");
  //   addDiv.classList.add("pulse");
  //   this.appendChild(addDiv);
  //   console.log(addDiv);
  //   // this.addEventListener("animationend", function (addDiv) {
  //   //   addDiv.target.remove();
  //   // });
  // }

  return (
    <div className="App">
      <hr />
      <h1>На случай принятия тяжелых решений</h1>
      <hr />
      <p>жмякни, чтоб решить</p>
      <DecisionMaker />
      <div className="pic">
        <img
          alt="hoba"
          src="https://4fun.one/uploads/posts/t/1584131406.jpeg"
        />
      </div>
      {/* <button className="button">попробуем</button> */}
      <footer>Fasolkin Zad Inc ©</footer>
    </div>
  );
}

export default App;
