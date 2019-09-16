import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';


class LoginPage extends React.Component {

    redirectOnLoginSuccess = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <section className='LoginPage'>
                <h2>Sign in to MMS Photo Board</h2>
                <LoginForm redirectOnLoginSuccess={this.redirectOnLoginSuccess} />
                <p>Don't have an account? <Link to='/SignUp'>Create one!</Link></p>
            </section>
        );
    }
};

export default LoginPage;
