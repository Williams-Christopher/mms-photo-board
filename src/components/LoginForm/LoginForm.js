import React from 'react';
import './LoginForm.css';

class SignInForm extends React.Component {
    render() {
        return(
            <form className='LoginForm' action=''>
                <fieldset>
                    <div className='row'>
                        <label htmlFor='user-name'>User name:</label>
                        <input type='text' name='user-name' id='user-name' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' required />
                    </div>
                    <button type='submit'>Login</button>
                </fieldset>
            </form>
        );
    };
};

export default SignInForm;
