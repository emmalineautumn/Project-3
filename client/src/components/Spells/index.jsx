import React, { Component } from 'react'
import API from '../../utils/API'
import Button from '../Buttons'
import ThisSpell from '../Spell'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class RefSpells extends Component {
    state = {
        spells: [],
        spell: ""
    }

    componentDidMount() {
        this.getSpells()
    }

    getSpells = () => {
        API.getAllSpells().then(spells => {
            this.setState({ spells: spells.data.results })
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
                                {this.state.spells.map(spells => {
                                    return (
                                        <Link to={"/spells/" + spells.url.split('/').pop()} key={spells.url.split('/').pop()}>
                                            <Button title={spells.name} key={spells.url.split('/').pop()} />
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className="col m8 s12" style={{height: "80vh", overflow: "auto"}}>
                                <Switch>
                                    <Route path="/spells/:id" component={ThisSpell} />
                                </Switch>

                            </div>
                        </div>
                    </div>
                </Router>
            </>
        )
    }
}

export default RefSpells;