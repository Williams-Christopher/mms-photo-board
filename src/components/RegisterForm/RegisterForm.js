import React from 'react';
import './RegisterForm.css';
import ApiServices from '../../services/api-service';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            firstName: null,
            lastName: null,
            userName: null,
            password: null,
            passwordVerify: null,
            isPasswordMatching: false,
            phone: null,
            phoneVerify: null,
            isPhoneMatching: false,
            isUserValid: false,
        };
    };

    updateStateForField = (e) => {
        this.setState({error: null});
        console.log(e.target.name);
        const fieldName = e.target.name;
        //this.setState({[fieldName]: e.target.value}, () => this.isUserValid());
        // this.isUserValid();
        this.setState({[fieldName]: e.target.value}, this.setStateCallback);
    };

    handleUserNameInput = (e) => {
        this.updateStateForField(e);
        console.log('user name input lost focus');
    };

    isUserValid() {
        const validUser = this.isFirstNameValid() && this.isUserNameValid() && this.isPasswordValid() && this.isPhoneValid();
        console.log('User valid? ', validUser)
        this.setState({isUserValid: validUser});
    };

    isFirstNameValid() {
        console.log('first name')
        return this.state.firstName != null && this.state.firstName.length > 1 ? true : false;
    };

    isUserNameValid() {
        console.log('name')
        return this.state.userName != null && this.state.userName.length > 3 ? true : false;
    };

    isPasswordValid() {
        console.log('in password')
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;
        //const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&]){7}[\S]+/;
        const { password, passwordVerify } = this.state;
        // if (!passwordRegex.test(password)) return false;
        const validPassword =  (password != null && passwordVerify != null) && passwordRegex.test(password) && password === passwordVerify ? true : false;
        console.log('validPasswordL ', validPassword);
        return validPassword;
    };

    isPhoneValid() {
        console.log('phone');
        const { phone, phoneVerify } = this.state;
        const validPhone = (phone != null && phoneVerify != null) && (phone.length === 10) && (isNaN(parseInt(phone)) === false) && (phoneVerify === phone) ? true : false;
        console.log('validPhone: ', validPhone);
        return validPhone;
    };

    lostFocus = (e) => {
        console.log('field lost focus');
    }

    setStateCallback() {
        console.log('SetState done?');
    }

    handleSubmitUser = (e) => {
        e.preventDefault();
        this.setState({error: null});
        
        const newUser = {
            user_first_name: this.state.firstName,
            user_last_name: this.state.lastName,
            user_name: this.state.userName,
            user_password: this.state.password,
            user_phone: `+1${this.state.phone}`
        };

        ApiServices.postUser(newUser)
            .then(result => {
                // if(!result.ok) {
                //     return result.json().then(error => Promise.reject(error));
                // }
                console.log('result: ', result);
                this.props.redirectOnSuccess();
            })
            .catch(error => {
                this.setState({error: error.error});
                console.log(error);
            })
    };

    render() {
        return(
            <form className='RegisterForm' onSubmit={(e) => this.handleSubmitUser(e)}>
                <fieldset>
                <div role='alert'>
                    {this.state.error && <p>{this.state.error}. Please try again.</p>}
                </div>
                    <div className='row'>
                        <label htmlFor='first-name'>First name:</label>
                        <input type='text' name='firstName' id='first-name' placeholder='Malcom' onBlur={e => this.handleUserNameInput(e)} required />
                    </div>
                    <div className='row'>
                        <label htmlFor='last-name'>Last name:</label>
                        <input type='text' name='lastName' id='last-name' placeholder='Reynolds' onChange={e => this.updateStateForField(e)} />
                    </div>
                    <div className='row'>
                        <label htmlFor='user-name'>User name:</label>
                        <input type='text' name='userName' id='user-name' placeholder='Your desired user name' onChange={e => this.updateStateForField(e)} required />
                    </div>
                    {this.state.error && this.state.error.toString().includes('Password') && <div role='alert' className='row'>
                        <p>Password must be at least 7 characters, include one or more capital and lower case letters, and one or more special characters !, @, #, $, %, ^, &amp;</p>
                    </div>}
                    <div className='row'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' placeholder='Password#4' onChange={e => this.updateStateForField(e)} required />
                    </div>
                    <div className='row'>
                        <label htmlFor='verify-password'>Verify password:</label>
                        <input type='password' name='passwordVerify' id='verify-password' placeholder='Verify Password' onChange={e => this.updateStateForField(e)} required />
                    </div>
                    {this.state.error && this.state.error === 'Verification message could not be sent' && <div role='alert' className='row'>
                        <p>Phone number must be in the U.S. or Canada. Enter only the area code and phone number with no dashes, e.g. 5551230987</p>
                    </div>}
                    <div className='row'>
                        <label htmlFor='phone'>Cell phone:</label>
                        <input type='tel' name='phone' id='phone' placeholder='5551230987' onChange={e => this.updateStateForField(e)} required />
                    </div>
                    <div className='row'>
                        <label htmlFor='verify-phone'>Verify phone:</label>
                        <input type='tel' name='phoneVerify' id='verify-phone' placeholder='5551230987' onChange={e => this.updateStateForField(e)} required />
                    </div>
                    <button type='submit' disabled={!this.state.isUserValid}>Register</button>
                </fieldset>
            </form>
        );
    };
};

export default RegisterForm;
