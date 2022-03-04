import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Disha Pandit and is{" "}
          <a
            href="https://github.com/DishaDarpan/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
