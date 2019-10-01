import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';


class LoginPage extends React.Component {
    static contextType = AppContext;

    redirectOnLoginSuccess = () => {
        this.context.setLoginState();
        this.props.history.push('/');
    };

    render() {
        return (
            <section className='LoginPage'>
                <h2>Sign in to MMS Photo Board</h2>
                <LoginForm redirectOnLoginSuccess={this.redirectOnLoginSuccess} />
                <p>Don't have an account? <Link to='/SignUp'>Create one!</Link></p>
                <p className='demo_explainer'>Demo account:<br />user: demo<br />password: Demo!23</p>
                <p className='demo_explainer'>Note that some key functionality of this app is found in SMS / MMS interaction that isn't available with demo credentials. For the full impact of this app, consider registering an account. It's quick and easy!</p>
            </section>
        );
    }
};

export default LoginPage;
