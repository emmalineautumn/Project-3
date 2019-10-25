import React, { Component } from 'react'
import API from '../../utils/API'
import Button from '../Buttons'
import ThisMonster from '../Monster'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class RefMonsters extends Component {
    state = {
        monsters: [],
        monster: "",
    }

    componentDidMount() {
        this.getMonsters()
    }

    getMonsters = () => {
        API.getAllMonsters().then(monster => {
            this.setState({ monsters: monster.data.results })
        })
    }

    render() {
        return (
            <>
                <Router>
                    <div className="container">
                        <div className="row"></div>
                        <div className="row">
                            <div className="col m4 s12" style={{height: "80vh", overflow: "auto"}}>
                        {this.state.monsters.map(monster => {
                            return (
                                <Link to={"/monsters/" + monster.url.split('/').pop()} key={monster.url.split('/').pop()}>
                                    <Button title={monster.name} key={monster.url.split('/').pop()} />
                                </Link>
                            )
                        })}
                            </div>

                        <div className="col m8 s12">
                    <Switch>
                        <Route path="/monsters/:id" component={ThisMonster} />
                    </Switch>
                    </div>
                    </div>
                    </div>
                </Router>
            </>
        )
    }
}

export default RefMonsters;