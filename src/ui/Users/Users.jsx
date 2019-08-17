import React, { Component } from "react";

// Componente tonto / Dumb Components / functional component 
// export default props => {
//   return <li onClick={props.onClick}>{props.user.name} : {props.user.phone} : {props.user.email} : {props.user.company.name}</li>;
// };

// Componente tonto / Dumb Components / functional component 
const ListUsers = (props) => {
  return (
    <li onClick={props.onClick}>{props.user.name} : {props.user.phone} : {props.user.email} : {props.user.company.name}</li>
);
};

class Users extends Component {
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

};



export default Users; 