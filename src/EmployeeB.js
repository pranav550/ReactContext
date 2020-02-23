import React, { Component, Fragment } from 'react';

class EmployeeB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'shalaj',
            empId: "109989"
        }
        console.log("EmployeeB Constructor Calling")
    }

    componentWillMount() {
        console.log("EmployeeB Component Willl mmount")
    }





    render() {
        console.log("EmployeeB Render Calling")
        return (
            <Fragment>
                <h1>Hello EmployeeB</h1>

            </Fragment>
        )
    }
}

export default EmployeeB