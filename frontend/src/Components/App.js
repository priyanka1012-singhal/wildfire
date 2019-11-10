import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./Layouts";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Footer></Footer>
      </Fragment>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;
