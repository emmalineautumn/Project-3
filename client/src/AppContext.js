import React, { Component } from 'react'
import dbAPI from './utils/dbAPI';

export const AppStateContext = React.createContext();

// call this context by putting "static contextType = UserSession" on the page and then pass into {this.context}

// export const UserSession = createContext(userValue)

export class AppStateProvider extends Component {

    componentDidMount() {
        this.updateUser()
    }

    updateUser = () => {
        dbAPI.userSession()
            .then(userId => {
                dbAPI.getUser(userId.data)
                    .then(user => {
                        this.setState({ user: user.data[0]._id, username: user.data[0].username })
                    });
            })
            .catch(err => {
                console.log('No user currently signed in on this session, setting to null');
                this.setState({ user: null })
            });
    }

    setGlobalState = (property, value) => {
        this.setState({ [property]: value })
    }

    state = {
        user: '',
        username: '',
        setGlobalState: this.setGlobalState,
        updateUser: this.updateUser
    }

    render() {
        return (
            <AppStateContext.Provider value={this.state}>
                {this.props.children}
            </AppStateContext.Provider>
        )
    }
}

// export const withContext = Component => {
//     return props => {
//       return (
//         <MyContext.Consumer>
//           {globalState => {
//             return <Component {...globalState} {...props} />;
//           }}
//         </MyContext.Consumer>
//       )
//     }
//   }


