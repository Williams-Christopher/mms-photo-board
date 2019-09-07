import React from 'react';
import './RegisterForm.css';

class RegisterForm extends React.Component {
    render() {
        return(
            <form className='RegisterForm' action=''>
                <fieldset>
                    <div className='row'>
                        <label htmlFor='first-name'>First name:</label>
                        <input type='text' name='first-name' id='first-name' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='last-name'>Last name:</label>
                        <input type='text' name='last-name' id='last-name' />
                    </div>
                    <div className='row'>
                        <label htmlFor='user-name'>User name:</label>
                        <input type='text' name='user-name' id='user-name' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='verify-password'>Verify password:</label>
                        <input type='password' name='verify-password' id='verify-password' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='phone'>Phone number:</label>
                        <input type='tel' name='phone' id='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='verify-phone'>Phone number:</label>
                        <input type='tel' name='verify-phone' id='verify-phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
                    </div>
                    <button type='submit'>Register</button>
                </fieldset>
            </form>
        );
    };
};

export default RegisterForm;
