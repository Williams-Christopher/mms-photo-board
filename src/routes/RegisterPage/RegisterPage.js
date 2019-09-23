import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.css';


class RegisterPage extends React.Component {

    redirectOnUserCreationSuccess() {
        console.log('redirectOnUserCreationSuccess()');
        // this.props.history.push('/');
    }

    render() {
        return (
            <section className='RegisterPage'>
                <h2>Sign up for MMS Photo Board</h2>
                <p className='RegisterPage__explainer'>
                    <em>
                    MMS Photo Board will not abuse your phone. You will receive a text message to verify your phone number and a reply message when you send a photo. That's it. Phone numbers are stored in our database securely with a one-way hash. That means your number will never be able to be shared.
                    </em>
                </p>
                <RegisterForm redirectOnSuccess={this.redirectOnUserCreationSuccess} />
                <p>Already have an account? <Link to='/Login'>Login</Link></p>
            </section>
        );
    }
};

export default RegisterPage;