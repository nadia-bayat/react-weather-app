import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rome" />
        <footer>
          <small>
            This project is coded by{" "}
            <a
              href="https://www.linkedin.com/in/nadia-bayat-9162b9222/"
              target="_blank"
              rel="noreferrer"
            >
              Nadia Bayat
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/nadia-bayat/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://stellular-youtiao-aad217.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
