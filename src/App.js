import Counter from "./miniApps/Counter";
import Joke from "./miniApps/Joke";
import Sauce from "./miniApps/Sauce";
import Weather from "./miniApps/Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sauce />
      <Counter />
      <Weather />
      <Joke />
    </div>
  );
}
