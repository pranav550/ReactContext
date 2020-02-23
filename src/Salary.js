import React, { Component, Fragment } from 'react';
import { MyContext } from "./Context";
class Salary extends Component {

    static contextType = MyContext
    render() {

        return (

            < Fragment >
                <h1>Salary Component</h1>


                <h2>Salary: {this.context.xyz.salary}</h2>
                <h2>Name: {this.context.xyz.name}</h2>
                <h2>Department: {this.context.xyz.department}</h2>
                <button onClick={this.context.clickChange}>Change Salary</button>
            </Fragment >
        )
    }

}

export default Salary
