import React, { Component, Fragment } from 'react';
import Department from "./Department";
class Employee extends Component {



    render() {
        return (
            <Fragment>
                <h1>Employee Component</h1>
                <Department />
            </Fragment>
        )
    }

}

export default Employee
