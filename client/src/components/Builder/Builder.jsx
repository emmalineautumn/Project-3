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
      Stats: "",
      Background: "",
      Classes: [],
      Races: [],
    }

    submit(event){
      event.preventDefault();
      if(this.state.Name.length === 0){
        console.log("Character needs a name!");
      }
      else {
        this.submitInfo();
      }
    }

    componentDidMount() {
      this.getAllClasses()
      this.getAllRaces()
    }

// getAllRaces Function 
    getAllRaces(){
      API.getAllRaces().then(data => {
        this.setState({Races: data.data.results})
      })
    }
// getAllClasses Function 
    getAllClasses(){
      API.getAllClasses().then(data => { 
        this.setState({Classes: data.data.results}) }
      )
    };
// getAllAbilities Function 

    handleTextChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      })
      this.props.updateCharacter(name, value)
    }

    render() {
      return(
     <div className="col l6 grey clearfix Builder">
      <Pager paginate="dots">
        <div className="characterName">
          {/* Character Name */}
          <h1>{this.state.Name || "Character Name"}</h1>
          <div className="col s12">
            {/* <span className="col s3"></span> */}
            <input type="text" className="grey lighten-2 input-field " name="Name" value={this.state.Name} onChange={this.handleTextChange} />
            {/* <span className="col s3"></span> */}
          </div>
          <Button title={"Male"} colors={this.props.character.Gender === 'Male' ? ['red', 'darken-4', 'text-white'] : ['grey', 'darken-3', 'text-black']} clickThis={()=>{this.props.updateCharacter('Gender', 'Male')}} />
          <Button title={"Female"} colors={this.props.character.Gender === 'Female' ? ['red', 'darken-4', 'text-white'] : ['grey', 'darken-3', 'text-black']} clickThis={()=>{this.props.updateCharacter('Gender', 'Female')}} />
        </div>
        <div className="characterRaces">
              {this.state.Races.map(result => <Button title={result.name} colors={this.props.character.Race === result.name ? ['red', 'darken-4', 'text-white'] : ['grey', 'darken-3', 'text-black']} clickThis={()=>{this.props.updateCharacter('Race',result.name)}} />)}

        </div>
        <div className="characterClasses">
           {/* Call to getAllClassses */}
           {this.state.Classes.map(result => <Button title={result.name} colors={this.props.character.Class === result.name ? ['red', 'darken-4', 'text-white'] : ['grey', 'darken-3', 'text-black']} clickThis={()=>{this.props.updateCharacter('Class',result.name)}} />)}
          
        </div>
        <div className="characterAbilities">
           {/* Call to getAllAbilityScores */}

        </div>
        <div className="characterBackground">
          {/* Description/Background Field */}

        </div>
      </Pager>
     </div>
      )
    } 
  
}

export default Builder;