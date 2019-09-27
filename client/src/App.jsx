import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />

        <Footer />
      </div>
    );
  }
}

export default App;
