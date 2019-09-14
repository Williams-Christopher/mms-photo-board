import React from 'react';
import './RegisterForm.css';

class RegisterForm extends React.Component {
    render() {
        return(
            <form className='RegisterForm' action=''>
                <fieldset>
                    <div className='row'>
                        <label htmlFor='first-name'>First name:</label>
                        <input type='text' name='first-name' id='first-name' placeholder='Malcom' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='last-name'>Last name:</label>
                        <input type='text' name='last-name' id='last-name' placeholder='Reynolds' />
                    </div>
                    <div className='row'>
                        <label htmlFor='user-name'>User name:</label>
                        <input type='text' name='user-name' id='user-name' placeholder='browncoats1' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' placeholder='AGoodPassword' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='verify-password'>Verify password:</label>
                        <input type='password' name='verify-password' id='verify-password' placeholder='AGoodPassword' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='phone'>Phone number:</label>
                        <input type='tel' name='phone' id='phone' placeholder='123-456-7890' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='verify-phone'>Phone number:</label>
                        <input type='tel' name='verify-phone' id='verify-phone' placeholder='123-456-7890' required />
                    </div>
                    <button type='submit'>Register</button>
                </fieldset>
            </form>
        );
    };
};

export default RegisterForm;
