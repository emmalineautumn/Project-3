import React, { Component } from 'react';
import '../App.css';
import Builder from "../components/Builder";
import Character from "../components/Character";

class Home extends Component {
<<<<<<< HEAD
  render() {
    return (
      <>
      </>
    );
  }
=======
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
>>>>>>> b1b0e97795ed6e2d8d922029716a1c995ba40a90
}

export default Home;