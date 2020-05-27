import React from "react";
import ReactDOM from "react-dom";

//import "./styles/index.scss";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { InputToDo } from "./component/inputToDo.js";

ReactDOM.render(<InputToDo />, document.querySelector("#app"));
