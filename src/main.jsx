import React from "react";
import ReactDOM from "react-dom/client";

// import HelloWorldApp from "./HelloWorld"; export default
import { HelloWorldApp } from "./HelloWorld";
import { FirstApp } from "./FirstApp";
import CounterApp from "./CounterApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
    <FirstApp title="Hola soy juan" subTitle="Aprendiendo React" numero={100} />
    <CounterApp value={123} />
  </React.StrictMode>
);
