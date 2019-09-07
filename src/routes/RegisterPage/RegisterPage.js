import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.css';


class RegisterPage extends React.Component {
    render() {
        return (
            <section className='RegisterPage'>
                <h2>Sign up for MMS Photo Board</h2>
                <RegisterForm />
                <p>Already have an account? <Link to='/Login'>Login</Link></p>
            </section>
        );
    }
};

export default RegisterPage;