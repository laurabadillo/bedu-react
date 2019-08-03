import React, { Component } from 'react';
import './App.css';
import ListUsers from './ui/ListUsers';

// Class componet
class App extends Component {

  constructor() {

    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(users => this.setState({ users }));
  }

  handleClick(user) {

    console.log(user);
  }

  render () {
    console.log(this.state);
    const { users = [] } = this.state;
    return (
      <div className="App">

        {users.map((user, i) => {
          return (
            <ListUsers key={i} user={user} onClick={this.handleClick.bind(this, user)} />
          );
        })}
      </div>
    );
  }
}

export default App;
