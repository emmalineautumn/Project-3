import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import NotFound from './components/NotFound';
import CreateCampaign from './pages/CampaignCreator';
// import Toolbox from "./components/Toolbox";
import CharacterBuilder from "./pages/CharacterBuilder";
import SignUp from "./pages/SignUp"


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
              <Route path="/character/create" component={CharacterBuilder} />
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/*" component={NotFound} />
            </Switch>
          {/* <Toolbox toolbox={this.state.toolbox} /> */}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
