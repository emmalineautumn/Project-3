import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import NotFound from './components/NotFound';
import CreateCampaign from './pages/CampaignCreator';
import Builder from "./components/Builder";
import Character from "./components/Character";
import Toolbox from "./components/Toolbox";

class App extends Component {
  state = {
    toolbox: 'none'
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/campaigns/create" exact component={CreateCampaign} />
              <Route path="/*" component={NotFound} />
            </Switch>
          <Builder />
          <Character />
          <Toolbox toolbox={this.state.toolbox} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
