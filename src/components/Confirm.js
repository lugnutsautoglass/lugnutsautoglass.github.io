import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List'

export class Confirm extends Component {
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
        const { values: {firstName,
            lastName,
            userProducts,
            userStreet,
            userCity,
            userState,
            userZip,
            userEmail,
            nameOnCard,
            ccType,
            expDate} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2>Confirm Appointment Request</h2>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText= { firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText= { lastName }
                        />    
                        <ListItem
                            primaryText="Email"
                            secondaryText= { userEmail }
                        />
                        <ListItem
                            primaryText="Wanted Products"
                            secondaryText= { userProducts }
                        />
                        <ListItem
                            primaryText="Name on Credit Card"
                            secondaryText= { nameOnCard }
                        />
                        <ListItem
                            primaryText="Credit Card Type"
                            secondaryText= { ccType }
                        />
                        <ListItem
                            primaryText="Credit Card #"
                            secondaryText= { '****' }
                        />
                        <ListItem
                            primaryText="Expiration"
                            secondaryText= { expDate }
                        />
                        <ListItem    
                            primaryText="Card Verification #"
                            secondaryText= { '****' }
                        />
                        <ListItem
                            primaryText="Credit Card #"
                            secondaryText= {'****'}
                        />
                        <ListItem
                            primaryText="Expiration Date"
                            secondaryText= { expDate}
                        />
                        <ListItem
                            primaryText="Card Verification Number"
                            secondaryText= { '****'}
                        />
                        <ListItem
                            primaryText="Street Address"
                            secondaryText= { userStreet }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText= { userCity }
                        />
                        <ListItem    
                            primaryText="State"
                            secondaryText= { userState }
                        />
                        <ListItem
                            primaryText="Zip Code"
                            secondaryText= { userZip }
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm;