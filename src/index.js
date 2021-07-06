import React from "react";
import ReactDOM from "react-dom";
import { MyTable } from "./MyTable";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MyTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
