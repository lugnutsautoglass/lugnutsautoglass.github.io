/* eslint-disable default-case */
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Success from './Success';




export class MessageForm extends Component {
    state = {
        step:1,
        firstName: '',
        lastName: '',
        userNum: '',
        userMess: '',
        userStreet: '',
        userCity: '',
        userState: '',
        userZip: '',
        userEmail: '',
        nameOnCard: '',
        ccType: '',
        ccNum: '',
        expDate: '',
        cardVeri: ''
    }
    //Go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    //Go back a step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handle change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const { firstName, lastName, userNum,
        userMess, userStreet, userCity, userState,
        userZip, userEmail, nameOnCard, ccType, ccNum, expDate, cardVeri } = this.state;
        const values = { firstName, lastName, userNum,
            userMess, userStreet, userCity, userState,
            userZip, userEmail, nameOnCard, ccType, ccNum, expDate, cardVeri  }

        switch (step) {
            case 1:
                return (
                    <ContactForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );    
            case 2:
                return <Success/>;
        }
    }
}

export default MessageForm;