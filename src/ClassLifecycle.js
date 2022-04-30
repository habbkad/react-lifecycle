import React, { Component } from "react";

class Classlifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data,
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Class Lifecycle</h1>
        {this.state.users.map((user) => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <h3>{user.phone}</h3>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Classlifecycle;
