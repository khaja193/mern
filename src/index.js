import React from "react";
//import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import App from "./components/App";
ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById("root")
);
