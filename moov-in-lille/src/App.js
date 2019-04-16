import React, { Component } from "react";
import "./App.css";
import Footer from './component/footer';
import NavbarFull from './component/NavbarFull';
import MyMap from "./component/MyMap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFull />
        <MyMap />
        <Footer />
      </div>
    );
  }
}

export default App;