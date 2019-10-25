import React,  { Component } from 'react'
import dbAPI from './utils/dbAPI';

export const AppStateContext = React.createContext();

// call this context by putting "static contextType = UserSession" on the page and then pass into {this.context}

// export const UserSession = createContext(userValue)

export class AppStateProvider extends Component {
    state = {
        user: ''
    }

    componentDidMount() {
        dbAPI.userSession()
          .then(user => this.setState({user: user.data}))
          .catch(err => console.log(err));

    } 
    render() {
        return (
            <AppStateContext.Provider value={{
                state: this.state,
                test: 'hello'
            }}>
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


