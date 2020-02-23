import React, { Component, Fragment } from 'react';
import Employee from "./Employee";

import { Provider } from "./Context";

class App extends Component {

  state = {
    name: "pranav",
    department: "development",
    salary: 5000
  }

  changeHandler = () => {
    this.setState({
      salary: this.state.salary + 500
    })
  }

  render() {
    const data = {
      xyz: this.state,
      clickChange: this.changeHandler
    }
    return (
      <>
        <h1>App Component</h1>
        <Provider value={data}>
          <Employee />
        </Provider>
      </ >
    )
  }

}

export default App
