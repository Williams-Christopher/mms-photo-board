import React from 'react';
import './RegisterForm.css';
import ApiServices from '../../services/api-service';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorServer: null,
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            passwordVerify: '',
            phone: null,
            phoneVerify: null,
            isPhoneMatching: false,
            isUserValid: false,
        };
    };

    handleFirstNameInput = (e) => {
        this.setState({
            errorFirstName: null,
            errorServer: null,
            firstName: e.target.value.trim()
        }, () => {
            const error = this.isFirstNameValid();
            if (error) {
                this.setState({ errorFirstName: error });
            }
            this.isUserValid();
        });
    };

    isFirstNameValid() {
        if (this.state.firstName == null || !this.state.firstName.length >= 1) {
            return 'Must be at least one character';
        }
    };

    handleUserNameInput = (e) => {
        this.setState({
            errorUserName: null,
            errorServer: null,
            userName: e.target.value.trim()
        }, () => {
            const error = this.isUserNameValid();
            if (error) {
                this.setState({ errorUserName: error });
            }
            this.isUserValid();
        });
    };

    isUserNameValid() {
        if (this.state.userName == null || !(this.state.userName.length >= 3)) {
            return 'Must be three or more characters';
        }
    };

    handlePasswordInput = (e) => {

        this.setState({
            errorPassword: null,
            errorServer: null,
            password: e.target.value
        }, () => {
            let error = this.isPasswordValid();
            if (error) {
                this.setState({ errorPassword: error });
            }
            this.isUserValid();
        });
    };

    isPasswordValid() {
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])(?=.{7,})[\S]+/;
        if (!passwordRegex.test(this.state.password)) {
            return 'Must be at least 7 characters, contain a capital letter, special character, and a number'
        }
    };

    handlePasswordVerifyInput = (e) => {
        this.setState({
            errorPasswordVerify: null,
            errorServer: null,
            passwordVerify: e.target.value.trim(),
        }, () => {
            const error = this.isPasswordVerifyValid();
            if (error) {
                this.setState({ errorPasswordVerify: error });
            }
            this.isUserValid();
        });
    };

    isPasswordVerifyValid() {
        if(!this.state.errorPassword && this.state.password !== this.state.passwordVerify) {
            return 'Passwords must match';
        }
    }

    handlePhoneInput = (e) => {
        this.setState({
            errorPhone: null,
            errorServer: null,
            phone: e.target.value.trim(),
        }, () => {
            const error = this.isPhoneValid();
            if(error) {
                this.setState({errorPhone: error});
            }
            this.isUserValid();
        });
    };

    isPhoneValid() {
        if(isNaN(this.state.phone)) {
            return 'Must contain only numbers';
        } else if(this.state.phone.length !== 10) {
            return 'Must be in the format 5551116666'
        }
    }

    handlePhoneVerifyInput = (e) => {
        this.setState({
            errorPhoneVerify: null,
            errorServer: null,
            phoneVerify: e.target.value.trim(),
        }, () => {
            const error = this.isPhoneVerifyValid();
            if(error) {
                this.setState({errorPhoneVerify: error});
            }
            this.isUserValid();
        });
    };

    isPhoneVerifyValid() {
        if(!this.state.errorPhone && this.state.phone !== this.state.phoneVerify) {
            return 'Phone numbers must match'
        }
    }

    isUserValid() {
        this.setState({
            isUserValid:
                (
                    this.state.errorFirstName === null &&
                    this.state.errorUserName === null &&
                    this.state.errorPassword === null &&
                    this.state.errorPasswordVerify === null &&
                    this.state.errorPhone === null &&
                    this.state.errorPhoneVerify === null &&
                    this.state.errorServer === null &&
                    this.state.firstName !== '' &&
                    this.state.userName !== '' &&
                    this.state.password !== '' &&
                    this.state.phone !== ''
                ),
        });
    };

    handleSubmitUser = (e) => {
        e.preventDefault();
        this.setState({ errorServer: null });

        const newUser = {
            user_first_name: this.state.firstName,
            user_last_name: this.state.lastName,
            user_name: this.state.userName,
            user_password: this.state.password,
            user_phone: `+1${this.state.phone}`
        };

        ApiServices.postUser(newUser)
            .then(result => {
                console.log('result: ', result);
                this.props.redirectOnSuccess();
            })
            .catch(error => {
                if(error.error.includes)
                this.setState({ errorServer: error.error });
                console.log(error);
            })
    };

    render() {
        return (
            <div className='RegisterForm__container'>
                <form className='RegisterForm' onSubmit={(e) => this.handleSubmitUser(e)}>
                    <div role='alert'>
                        {this.state.errorServer && <p>{this.state.errorServer}.</p>}
                    </div>
                    <div className='row'>
                        <label htmlFor='first-name'>First name:</label>
                        <span className='RegisterForm__error'>{this.state.errorFirstName ? this.state.errorFirstName : null}</span>
                        <input type='text' name='firstName' id='first-name' placeholder='One or more characters' onBlur={e => this.handleFirstNameInput(e)} required />
                    </div>

                    <div className='row'>
                        <label htmlFor='user-name'>User name:</label>
                        <span className='RegisterForm__error'>
                            {this.state.errorServer && this.state.errorServer === 'User name is in use' && 'User name is taken. Please try another.'}
                            {this.state.errorUserName ? this.state.errorUserName : null}
                        </span>
                        <input type='text' name='userName' id='user-name' placeholder='Three or more characters' onBlur={e => this.handleUserNameInput(e)} required />
                    </div>

                    <div className='row'>
                        <label htmlFor='password'>Password:</label>
                        <span className='RegisterForm__error'>{this.state.errorPassword ? this.state.errorPassword : null}</span>
                        <input type='password' name='password' id='password' placeholder='Use a strong password! e.g. Photo$7' onBlur={e => this.handlePasswordInput(e)} required />
                    </div>

                    <div className='row'>
                        <label htmlFor='verify-password'>Verify password:</label>
                        <span className='RegisterForm__error'>{this.state.errorPasswordVerify && !this.state.errorPassword ? this.state.errorPasswordVerify : null}</span>
                        <input type='password' name='passwordVerify' id='verify-password' placeholder='Verify Password' onBlur={e => this.handlePasswordVerifyInput(e)} required />
                    </div>


                    <div className='row'>
                        <label htmlFor='phone'>Cell phone:</label>
                        <span className='RegisterForm__error'>
                            {this.state.errorServer && this.state.errorServer === 'Verification message could not be sent' && <div role='alert' className='RegisterForm__error'>
                            <p>U.S. and Canadian phone numbers only at this time. Enter only the area code and phone number with no dashes, e.g. 5551230987</p>
                            </div>}
                            {this.state.errorPhone ? this.state.errorPhone : null}
                        </span>

                        <input type='tel' name='phone' id='phone' placeholder='Use the format 5551118888' onBlur={e => this.handlePhoneInput(e)} required />
                    </div>

                    <div className='row'>
                        <label htmlFor='verify-phone'>Verify phone:</label>
                        <span className='RegisterForm__error'>{this.state.errorPhoneVerify && !this.state.errorPhone ? this.state.errorPhoneVerify : null}</span>
                        <input type='tel' name='phoneVerify' id='verify-phone' placeholder='Re-enter your phone number' onBlur={e => this.handlePhoneVerifyInput(e)} required />
                    </div>

                    <button type='submit' disabled={!this.state.isUserValid}>Register</button>
                </form>
            </div>
        );
    };
};

export default RegisterForm;
