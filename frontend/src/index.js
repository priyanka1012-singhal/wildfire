import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
    type: "dark"
  }
});

console.log(theme);

//render App component on the root element
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
