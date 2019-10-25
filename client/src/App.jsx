import React, { Component, createContext } from "react";
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
import SignUp from "./pages/SignUp";
import dbAPI from './utils/dbAPI';
import SignIn from "./pages/SignIn";
import CampaignBuilder from './components/Campaign Builder';
import Classes from './pages/Classes';


// call this context by putting "static contextType = UserSession" on the page and then pass into {this.context}
let userValue
dbAPI.getUser()
  .then(user => userValue = user)
  .catch(err => console.log(err));
export const UserSession = createContext(userValue)


class App extends Component {
  state = {
    toolbox: 'none',
  }

  static contextType = UserSession;

  componentDidMount() {
    console.log(UserSession)
  }

  render() {
    return (
      <UserSession.Provider value={this.state.userValue}>
        <div className="App">
          <Router>
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
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/sign-in" exact component={SignIn} />
              <Route exact path="/campaign" component={CampaignBuilder} />
              <Route path ="/classes" component={Classes} />
              <Route path="/*" component={NotFound} />
            </Switch>
            {/* <Toolbox toolbox={this.state.toolbox} /> */}
            <Footer />
          </Router>
        </div>
      </UserSession.Provider>
    );
  }
}

export default App;
