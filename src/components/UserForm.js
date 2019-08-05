/* eslint-disable default-case */
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormShippingDetails from './FormShippingDetails';
import Confirm from './Confirm';
import OrderSubmitted from './OrderSubmitted';

export class UserForm extends Component {
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
        const { 
            firstName,
            lastName,
            userNum,
            userMess,
            userStreet,
            userCity,
            userState,
            userZip,
            userEmail,
            nameOnCard,
            ccType,
            ccNum,
            expDate,
            cardVeri, userProducts} = this.state;
        const values = { firstName,
            lastName,
            userNum,
            userMess,
            userStreet,
            userCity,
            userState,
            userZip,
            userEmail,
            nameOnCard,
            ccType,
            ccNum,
            expDate,
            cardVeri, userProducts}

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FormShippingDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 5:
                return <OrderSubmitted/>;
        }
    }
}

export default UserForm;
