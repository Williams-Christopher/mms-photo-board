import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.css';


class RegisterPage extends React.Component {

    redirectOnUserCreationSuccess = () => {
        this.props.history.push('/Login');
    }

    render() {
        return (
            <section className='RegisterPage'>
                <h2>Sign up for MMS Photo Board</h2>
                <p>
                    MMS Photo Board will not abuse your phone. You will receive a text message to verify your phone number and a reply to messages you send. That's it.
                </p>
                <RegisterForm redirectOnSuccess={this.redirectOnUserCreationSuccess} />
                <p>Already have an account? <Link to='/Login'>Login</Link></p>
            </section>
        );
    }
};

export default RegisterPage;
