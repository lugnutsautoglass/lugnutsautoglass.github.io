import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
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
                    hintText="Enter Name on Credit Card"
                    floatingLabelText="Name On Credit Card"
                    onChange={handleChange('nameOnCard')}
                    defaultValue={values.nameOnCard}
                    />
                    <br/>
                    <TextField
                    hintText="(Visa, MC, AE)"
                    floatingLabelText="Enter Credit Card type"
                    onChange={handleChange('ccType')}
                    defaultValue={values.ccType}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Credit Card #"
                    floatingLabelText="Credit Card #"
                    onChange={handleChange('ccNum')}
                    defaultValue={values.ccNum}
                    />
                    <br/>
                    <TextField
                    hintText="(mm/yyyy)"
                    floatingLabelText="Enter Expiration Date"
                    onChange={handleChange('expDate')}
                    defaultValue={values.expDate}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Card Verification #"
                    floatingLabelText="Enter Card Verification #"
                    onChange={handleChange('cardVeri')}
                    defaultValue={values.cardVeri}
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

export default FormPersonalDetails;
