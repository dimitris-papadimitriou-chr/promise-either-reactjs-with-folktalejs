import React from 'react';

import { ClientService } from "./ClientService.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //save the state
    var self = this;
    var id = event.target.value;

    ClientService.getClientNameById(id)
      .then(name => {
        //after the service call finish, then update the state
        self.setState({
          clientName: name,
          id: id
        });
      })
  }

  render() {
    return (
      <form  > 
        <label>
          clinet id:
          <input type="text" value={this.state.id} onChange={this.handleChange} />
        </label>
        <div> {this.state.clientName} </div>
      </form>
    );
  }
}