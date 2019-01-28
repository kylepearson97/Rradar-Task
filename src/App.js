import React, { Component } from "react";
import Header from "./components/layout/Header";
import Search from "./components/Searchbar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
