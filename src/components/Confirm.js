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
            userQuantity,
            userStreet,
            userCity,
            userState,
            userZip,
            userEmail} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2>Confirm Information</h2>
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
                            primaryText="Quantity"
                            secondaryText= { userQuantity }
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