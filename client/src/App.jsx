import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import NotFound from './components/NotFound';
import CreateCampaign from './pages/CampaignCreator';
import Toolbox from "./components/Toolbox";
import CharacterBuilder from "./pages/CharacterBuilder";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CampaignBuilder from './components/Campaign Builder';
import Classes from './pages/Classes';
import Profile from './pages/Profile';
import {AppStateProvider} from './AppContext';
import Races from './pages/Races'
import Monsters from './pages/Monsters'
import Spells from './pages/Spells'
import CampaignJoin from "./pages/CampaignJoin";

class App extends Component {
  state = {
    toolbox: 'none'
  }

  changeTool = (value) => {
    this.setState({toolbox: value});
  }

  render() {
    return (
      <div className="App">
        <Router>
          <AppStateProvider>
            <Header />
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/campaigns/create"
                exact
                component={CreateCampaign}
              />
              <Route path="/character/create" component={CharacterBuilder} />
              <Route path="/sign-up" exact render={props => <SignUp {...props} redirectTo="/" />} />
              <Route path="/sign-in" exact render={props => <SignIn {...props} redirectTo="/" />} />
              <Route exact path="/campaign" component={CampaignBuilder} />
              <Route path="/classes" component={Classes} />
              <Route path="/profile" component={Profile} />
              <Route path ="/races" component={Races} />
              <Route path="/monsters" component={Monsters} />
              <Route path="/spells" component={Spells} />
              <Route path="/campaign/join/:id" component={CampaignJoin} />
              <Route path="/*" component={NotFound} />
            </Switch>
            <Toolbox toolbox={this.state.toolbox} />
            <Footer changeActiveTool={this.changeTool} toolbox={this.state.toolbox} />

          </AppStateProvider>
        </Router>
      </div>
    );
  }
}

export default App;
