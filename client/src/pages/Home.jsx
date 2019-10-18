import React, {Component} from 'react';
import '../App.css';
import Builder from "../components/Builder";
import Character from "../components/Character";

class Home extends Component {
    render() {
        return (
          <div className="container grey lighten-5">
            <div
              className="row"
              style={{
                fontFamily: "Grenze"
              }}
            >
              <Builder />
              <Character />
            </div>
          </div>
        );
    }
}

export default Home;