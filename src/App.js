// create your App component here
import React, { Component } from 'react';

class App extends Component {
  state = {
    peopleInSpace: []
  }

  render() {
    return(
      <div>
        <p>{this.state.peopleInSpace.map(person => person.name)}</p>
      </div>
    )
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => {
        this.setState ({
          peolpleInSpace: data.people
        })
      })
  }
}

export default App;
