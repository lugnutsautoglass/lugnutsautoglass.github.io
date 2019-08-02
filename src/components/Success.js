import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //Process Form//
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2>Message Sent</h2>
                    <h3>Thank you for your inquiry.</h3> <h5>You will receive a response within 24 hours.</h5>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;