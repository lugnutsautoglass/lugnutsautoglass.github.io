import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class contactForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h3>Questions or Comments?</h3>
                    <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Email"
                    floatingLabelText="Email"
                    onChange={handleChange('userEmail')}
                    defaultValue={values.userEmail}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Phone #"
                    floatingLabelText="Telephone #"
                    onChange={handleChange('userNum')}
                    defaultValue={values.userNum}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Message"
                    floatingLabelText="Your Message to Lugnuts"
                    onChange={handleChange('userMess')}
                    defaultValue={values.userMess}
                    />
                    <br/>
                    <RaisedButton
                        label="Submit"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 30
    }
}

export default contactForm;