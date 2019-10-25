import React, { Component } from 'react'
import API from '../../utils/API'
import Button from '../Buttons'
import ThisRace from '../Race'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class RefRaces extends Component {
    state = {
        races: [],
        race: "",
    }

    componentDidMount() {
        this.getRaces()
    }

    getRaces = () => {
        API.getAllRaces().then(races => {
            this.setState({ races: races.data.results })
            console.log(races.data.results)
        })
    }

    render() {
        return (
            <>
                <Router>
                    <div className="container">
                        <div className="row"></div>
                        {this.state.races.map(races => {
                            return (
                                <Link to={"/races/" + races.url.split('/').pop()} key={races.url.split('/').pop()}>
                                    <Button title={races.name} key={races.url.split('/').pop()} />
                                </Link>
                            )
                        })}
                    </div>

                    <Switch>
                        <Route path="/races/:id" component={ThisRace} />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default RefRaces;