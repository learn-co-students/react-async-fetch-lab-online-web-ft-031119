// create your App component here
import React, { Component } from 'react';

class App extends Component {
  state = {
    peopleinSpace: []
  }
  render() {
    return(
      <ul>
        {this.state.peopleinSpace.map(person => person.name).join(', ')}
      </ul>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        peopleinSpace: data.people
      })
    })
  }

}

export default App
