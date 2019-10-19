import React, { Component } from 'react'
import '../Character'; 
import "./Builder.css";
import { Pager } from '../Pagify';
import API from '../../utils/API';
import Button from "../Buttons"

class Builder extends Component {
    state = {
      Name: "Moar Wrightbroad",
      Race: "",
      Class: "",
      Stats: "",
      Background: "",
      Classes: [],
      Races: [],
    }

    submit(event){
      event.preventDefault();
      if(this.state.Name.length === 0){
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
    }

    render() {
      return(
     <div className="Builder col l6 grey clearfix">
      <Pager paginate="dots">
        <div className="characterName">
          {/* Character Name */}
          <h1>{this.state.Name}</h1>
          <input name="Name" value={this.state.Name} onChange={this.handleTextChange} />
        </div>
        <div className="characterRaces">
              {this.state.Races.map(result => <Button title={result.name} />)}

        </div>
        <div className="characterClasses">
           {/* Call to getAllClassses */}
          {this.state.Classes.map(result => <Button title={result.name} />)}
          
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