import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/*" component="No match!" />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
