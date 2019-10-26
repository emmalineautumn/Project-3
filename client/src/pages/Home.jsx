import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import Buttons from '../components/Buttons';

class Home extends Component {
    render() {
        return (
          <div className="container">
            <div className="card">
              <div className="dndIntro card-content">
                <p>
                  "The Dungeons & Dragons roleplaying game is about storytelling
                  in worlds of swords and sorcery. It shares elements with
                  childhood games of make-believe. Like those games, D&D is
                  driven by imagination. It’s about picturing the towering
                  castle beneath the stormy night sky and imagining how a
                  fantasy adventurer might react to the challenges that scene
                  presents."
                </p>
              </div>

              <div className="dndRules card-content grey lighten-4">
                <p id="redFont">But don't take our word for it.</p>
                <p>
                  Start now, and dive into this world of mischief and magic. 
                </p>
                <p>Fraternize with the Tieflings, take Tito's shots with the Half-Elves, and bite 
                  into a turkey leg with the Orcs. 
                </p>
                <ul>
                  <li>Create a Character</li>
                  <li>Start a Campaign</li>
                  <li>Read Up On Your Spells & Monsters</li>
                </ul>
                <Link to="/character/create">
                  <Buttons
                    title="Make New Characters!"
                    colors={["red", "darken-4"]}
                  />
                </Link>
                <Link to="/campaign">
                  <Buttons
                    title="Create a New Campaign"
                    colors={["red", "darken-4"]}
                  />
                </Link>
              </div>
            </div>
          </div>
        );
  }
}
export default Home;