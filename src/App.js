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
          src="https://4fun.one/uploads/posts/t/1584131406.jpeg"
        />
      </div>

      <footer>Fasolkin Zad Inc ©</footer>
    </div>
  );
}

export default App;
