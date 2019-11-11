import React, { Component, Fragment } from "react";
import "./App.css";
import { Header } from "./Layouts";
import Body from "./Body";
import { MenuList } from "../store";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Body menuList={MenuList}></Body>
      </Fragment>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;
