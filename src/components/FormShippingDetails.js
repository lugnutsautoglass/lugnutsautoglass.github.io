import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormShippingDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h3>Payment Information</h3>
                    <TextField
                    hintText="Enter Street Address"
                    floatingLabelText="Street Address"
                    onChange={handleChange('userStreet')}
                    defaultValue={values.userStreet}
                    />
                    <br/>
                    <TextField
                    hintText="Enter City"
                    floatingLabelText="City"
                    onChange={handleChange('userCity')}
                    defaultValue={values.userCity}
                    />
                    <br/>
                    <TextField
                    hintText="Enter State"
                    floatingLabelText="State"
                    onChange={handleChange('userState')}
                    defaultValue={values.userState}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Zip Code"
                    floatingLabelText="Zip Code"
                    onChange={handleChange('userZip')}
                    defaultValue={values.userZip}
                    />
                    
                    <br/>
                    <RaisedButton
                        label="Continue"
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

export default FormShippingDetails;
