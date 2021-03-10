import Counter from "./miniApps/Counter";
import Sauce from "./miniApps/Sauce";
import Weather from "./miniApps/Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sauce />
      <Counter />
      <Weather />
    </div>
  );
}
