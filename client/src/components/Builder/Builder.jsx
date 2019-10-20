import React, { Component } from 'react'
import '../Character';
import "./Builder.css";
import { Pager } from '../Pagify';
import API from '../../utils/API';
import Button from "../Buttons"

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
  }

  submit(event) {
    event.preventDefault();
    if (this.state.Name.length === 0) {
      console.log("Character needs a name!");
    } else {
      this.submitInfo();
    }
  }

  componentDidMount() {
    this.getAllClasses()
    this.getAllRaces()
  }

  // getAllRaces Function 
  getAllRaces() {
    API.getAllRaces().then(data => {
      this.setState({ Races: data.data.results })
    })
  }
  // getAllClasses Function 
  getAllClasses() {
    API.getAllClasses().then(data => {
      this.setState({ Classes: data.data.results })
    });
  };

  // getAllAbilities Function 
  handleTextChange = event => {
    const { name, value } = event.target;
    // this.setState({
    //   [name]: value
    // })
    this.props.updateCharacter(name, value)
  }

  randomizeStats = () => {
    const stats = {
      strength: '',
      constitution: '',
      dexterity: '',
      intelligence: '',
      wisdom: '',
      charisma: ''
    };

    for (let stat in stats) {
      if (stats.hasOwnProperty(stat)) {
        let randomValue = 0;

        for (let i = 0; i < 3; i++) {
          randomValue += Math.ceil(Math.random() * 6);
        }
        stats[stat] = randomValue
      }
    }
    this.props.updateCharacter("Stats", stats)
  }

  render() {
    return (
      <div className="col l6">
        <div className="grey clearfix Builder">
          <Pager paginate="dots">
            <div className="characterName">
              {/* Character Name */}
              <h1>{this.state.Name || "Character Name"}</h1>
              <div className="col s12 input-field">
                <input type="text" name="Name" value={this.props.character.Name} onChange={this.handleTextChange} />
              </div>
              <Button title={"Male"} colors={this.props.character.Gender === 'Male' ? ['red', 'darken-4', 'text-white'] : ['grey', 'darken-3', 'text-black']} clickThis={() => { this.props.updateCharacter('Gender', 'Male') }} />
              <Button title={"Female"} colors={this.props.character.Gender === 'Female' ? ['red', 'darken-4', 'text-white'] : ['grey', 'darken-3', 'text-black']} clickThis={() => { this.props.updateCharacter('Gender', 'Female') }} />
            </div>
            <div className="characterRaces">
              <h1>Pick your race</h1>
              {this.state.Races.map(result => <Button key={result.id} title={result.name} colors={this.props.character.Race === result.name ? ['red', 'darken-4', 'text-white'] : ['grey', 'darken-3', 'text-black']} clickThis={() => { this.props.updateCharacter('Race', result.name) }} />)}

            </div>
            <div className="characterClasses">
              {/* Call to getAllClassses */}
              <h1>Pick your class</h1>
              {this.state.Classes.map(result => <Button key={result.id} title={result.name} colors={this.props.character.Class === result.name ? ['red', 'darken-4', 'text-white'] : ['grey', 'darken-3', 'text-black']} clickThis={() => { this.props.updateCharacter('Class', result.name) }} />)}

            </div>
            <div className="characterAbilities">
              <h1>Enter your ability scores</h1>
              {/* Call to getAllAbilityScores */}
              {
                ['strength', 'constitution', 'dexterity', 'intelligence', 'wisdom', 'charisma'].map(stat => (
                  <div className="input-field col s6">
                    <input placeholder={`Enter value for ${stat}`} autoComplete="off" type="text" onChange={this.handleTextChange} value={this.props.character.Stats[stat]} name={stat} />
                    <label className="black-text bold active" htmlFor={stat}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</label>
                  </div>
                ))
              }

              <Button title="Randomize scores" colors={['grey', 'darken-3', 'black']} clickThis={this.randomizeStats} />
            </div>
            <div className="characterBackground">
              {/* Description/Background Field */}
              <h1>Enter your character's background</h1>
              <textarea className="materialize-textarea" name="Background" cols="30" rows="10" value={this.props.character.Background} onChange={this.handleTextChange}></textarea>
            </div>
          </Pager>
        </div>
      </div>
    )
  }

}

export default Builder;