import "./App.css";
import DecisionMaker from "./DecisionMaker";

function App() {
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
          src="https://drive.google.com/uc?export=view&id=1gI5rhVU_qlb9NFFIVe76ljICUJg0v4Y7"
        />
      </div>

      <footer>Fasolkin Zad Inc ©</footer>
    </div>
  );
}

export default App;
