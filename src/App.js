// create your App component here
import React, { Component } from 'react';

class App extends Component {
    state = { 
        data: ''
     }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(({people}) => this.setState({data: people}))
    }

    render() { 
        return ( <div></div> );
    }
}
 
export default App;