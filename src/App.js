import React, {Component} from 'react';

class App extends React.Component{

	state = {
    peopleInSpace: []
  }
 

	componentDidMount() {
	    fetch('http://api.open-notify.org/astros.json')
	      .then(response => response.json())
	      .then(data => {
	        this.setState({
	          peopleInSpace: data.people
	        })
	      })
	  }
	
};

export default App;