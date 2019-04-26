// create your App component here
import React from "react";
export default class App extends React.Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ people: data.people });
      });
  }

  render() {
    return <div> {this.state.people.map(person => person.name)}</div>;
  }
}
