import React, { Component } from 'react'
import API from '../../utils/API'
import Button from '../Buttons'
import ThisClass from '../Class'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class RefClasses extends Component {
    state = {
        classes: [],
        class: "",
    }

    componentDidMount() {
        this.getClasses()
    }

    getClasses = () => {
        API.getAllClasses().then(classes => {
            this.setState({ classes: classes.data.results })
            console.log(classes.data.results)
        })
    }

    render() {
        return (
            <>
                <Router>
                    <div className="container">
                    {this.state.classes.map(classes => {
                        return (
                        <Link to={"/classes/" + classes.url.split('/').pop()} key={classes.url.split('/').pop()}>
                            <Button title={classes.name} key={classes.url.split('/').pop()} />
                        </Link>
                        )
                    })}
                    </div>

                    <Switch>
                        <Route path="/classes/:id" component={ThisClass} />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default RefClasses;