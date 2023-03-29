import React from "react";
import ReactDOM from "react-dom/client";

function PrintSomething() {
  return <h1>Garry</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PrintSomething></PrintSomething>);
