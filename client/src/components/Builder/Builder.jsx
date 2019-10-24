import React, { Component } from "react";
import "../Character";
import "./Builder.css";
import { Pager } from "../Pagify";
import API from "../../utils/API";
import Button from "../Buttons";
import Buttons from "../Buttons";
import UserSession from "../../App"

class Builder extends Component {
  state = {
    Name: "",
    Race: "",
    RaceID: 0,
    Class: "",
    ClassID: 0,
    Stats: {},
    Background: "",
    Classes: [],
    Races: [],
    alignment1: '',
    alignment2: ''
  };

  static contextType = UserSession;

  submit(event) {
    event.preventDefault();
    if (this.state.Name.length === 0) {
      console.log("Character needs a name!");
    } else {
      this.submitInfo();
    }
  }

  componentDidMount() {
    this.getAllClasses();
    this.getAllRaces();
  }

  // getAllRaces Function
  getAllRaces() {
    API.getAllRaces().then(data => {
      this.setState({ Races: data.data.results });
    });
  }
  // getAllClasses Function
  getAllClasses() {
    API.getAllClasses().then(data => {
      this.setState({ Classes: data.data.results });
    });
  }

  // getAllAbilities Function
  handleTextChange = event => {
    const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // })
    this.props.updateCharacter(name, value);
  };

  randomizeStats = () => {
    const stats = {
      strength: "",
      constitution: "",
      dexterity: "",
      intelligence: "",
      wisdom: "",
      charisma: ""
    };

    for (let stat in stats) {
      if (stats.hasOwnProperty(stat)) {
        let randomValue = 0;

        for (let i = 0; i < 3; i++) {
          randomValue += Math.ceil(Math.random() * 6);
        }
        stats[stat] = randomValue;
      }
    }
    this.props.updateCharacter("stats", stats);
  };

  createAlignment = () => {
    let value;
    if (this.state.alignment1 && this.state.alignment1 === this.state.alignment2) {
      value = 'True Neutral';
    } else {
      value = `${this.state.alignment1} ${this.state.alignment2}`
    }

    this.props.updateCharacter('alignment', value)
  }

  render() {
    return (
      <div className="col l6">
        <div className="grey clearfix Builder">
          <Pager paginate="dots" submit submitAction={this.props.submitAction}>
            <div>
              {/* Character Name */}
              <h1>{this.props.character.name || "Character Name"}</h1>
              <div className="characterName col s12 input-field">
                <input
                  type="text"
                  name="name"
                  value={this.props.character.name}
                  onChange={this.handleTextChange}
                />
              </div>
              <Button
                title={"Male"}
                colors={
                  this.props.character.gender === "Male"
                    ? ["red", "darken-4", "text-white"]
                    : ["grey", "darken-3", "text-black"]
                }
                clickThis={() => {
                  this.props.updateCharacter("gender", "Male");
                }}
              />
              <Button
                title={"Female"}
                colors={
                  this.props.character.gender === "Female"
                    ? ["red", "darken-4", "text-white"]
                    : ["grey", "darken-3", "text-black"]
                }
                clickThis={() => {
                  this.props.updateCharacter("gender", "Female");
                }}
              />
              <Button
                title={"Non-Binary"}
                colors={
                  this.props.character.gender === "Non-Binary"
                    ? ["red", "darken-4", "text-white"]
                    : ["grey", "darken-3", "text-black"]
                }
                clickThis={() => {
                  this.props.updateCharacter("gender", "Non-Binary");
                }}
              />
            </div>
            <div className="characterRaces">
              <h1>Pick your race</h1>
              {this.state.Races.map(result => (
                <Button
                  key={result.id}
                  title={result.name}
                  colors={
                    this.props.character.race === result.name
                      ? ["red", "darken-4", "text-white"]
                      : ["grey", "darken-3", "text-black"]
                  }
                  clickThis={() => {
                    this.props.updateCharacter("race", result.name);
                  }}
                />
              ))}
            </div>
            <div className="characterClasses">
              {/* Call to getAllClassses */}
              <h1>Pick your class</h1>
              {this.state.Classes.map(result => (
                <Button
                  key={result.id}
                  title={result.name}
                  colors={
                    this.props.character.class === result.name
                      ? ["red", "darken-4", "text-white"]
                      : ["grey", "darken-3", "text-black"]
                  }
                  clickThis={() => {
                    this.props.updateCharacter("class", result.name);
                  }}
                />
              ))}
            </div>
            <div className="characterAbilities">
              <h1>Enter your ability scores</h1>
              {/* Call to getAllAbilityScores */}
              {[
                "strength",
                "constitution",
                "dexterity",
                "intelligence",
                "wisdom",
                "charisma"
              ].map(stat => (
                <div key={stat} className="input-field col s6">
                  <input
                    placeholder={`Enter value for ${stat}`}
                    autoComplete="off"
                    type="number"
                    max="18"
                    onChange={this.handleTextChange}
                    value={this.props.character.stats[stat]}
                    name={stat}
                  />
                  <label className="black-text bold active" htmlFor={stat}>
                    {stat.charAt(0).toUpperCase() + stat.slice(1)}
                  </label>
                </div>
              ))}

              <Button
                title="Randomize scores"
                colors={["grey", "darken-3", "black"]}
                clickThis={this.randomizeStats}
              />
            </div>
            <div className="characterBackground">
              {/* Description/Background Field */}
              <h1>Enter your character's background</h1>
              <textarea
                className="materialize-textarea"
                name="Background"
                cols="30"
                rows="10"
                value={this.props.character.Background}
                onChange={this.handleTextChange}
              ></textarea>
            </div>
            <div>
              <h1>Select your alignment</h1>
              <div className="row">
                {[
                  'Lawful',
                  'Neutral',
                  'Chaotic'
                ].map(alignment => <Buttons title={alignment}
                  colors={
                    this.state.alignment1 === alignment
                      ? ["red", "darken-4", "text-white"]
                      : ["grey", "darken-3", "text-black"]
                  }
                  clickThis={()=>{
                    this.setState({alignment1: alignment}, ()=>
                    this.createAlignment())
                  }}
                />)}
              </div>
              <div className="row">
                {[
                  'Good',
                  'Neutral',
                  'Evil'
                ].map(alignment => <Buttons title={alignment}
                  colors={
                    this.state.alignment2 === alignment
                      ? ["red", "darken-4", "text-white"]
                      : ["grey", "darken-3", "text-black"]
                  }
                  clickThis={()=>{
                    this.setState({alignment2: alignment}, ()=>
                    this.createAlignment())
                  }}
                />)}
              </div>
              <div className="switch">
                  <label>
                    Player Character
                    <input name="npc" value={this.props.character.npc} onClick={this.props.updateCharacter} type="checkbox" />
                    <span className="lever"></span>
                    Non-player Character
                  </label>
              </div>
            </div>
          </Pager>
        </div>
      </div>
    );
  }
}

export default Builder;
