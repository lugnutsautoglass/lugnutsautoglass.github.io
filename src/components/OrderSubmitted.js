import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export class OrderSubmitted extends Component {
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
                    <h2>Order Submitted</h2>
                    <h3>Thank you for your request.</h3> <h4>You will receive a confirmation email within 24 hours if we have your product in stock. Your credit card will not be charged until confirmation of product and quantity. </h4>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default OrderSubmitted;