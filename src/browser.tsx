import React from "react";
import ReactDOM from "react-dom";
import App from "./app.tsx";

(ReactDOM as any).hydrate(
  <App />,
  //@ts-ignore
  document.getElementById("root")
);
