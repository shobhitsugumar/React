import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";

const tyring = "this just a try ";

const rendercustom = React.createElement(
  "a",
  {
    href: "https://www.google.com/",
  },
  "click me to navigate",
  tyring
);

ReactDOM.createRoot(document.getElementById("root")).render(rendercustom);
