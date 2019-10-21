import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import '../App.css';
import Buttons from '../components/Buttons';

class Home extends Component {
    render() {
        return (
          <div className="container grey lighten-5">
            <div
              id="headerDiv"
              className="row"
              style={{
                fontFamily: "Grenze"
              }}
            >
              <h1>You currently do not have any characters. Would you like to make one now?</h1>
              <Link to="/character/create">
                <Buttons title="Yes, please!" colors={['red', 'darken-4']} />
              </Link>
            </div>
          </div>
        );
    }
}
export default Home;