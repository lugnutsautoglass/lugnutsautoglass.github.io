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
                    <h3>Thank you for your request.</h3> <h4>You will receive an email within 24 hours. If your product is in stock, we will confirm the order and request the payment information at that time. </h4>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default OrderSubmitted;