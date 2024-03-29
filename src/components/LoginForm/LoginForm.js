import React from 'react';
import ApiServices from '../../services/api-service';
import TokenServices from '../../services/token-services';
import './LoginForm.css';

class SignInForm extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {error: null};
        this.user_name = React.createRef();
        this.user_password = React.createRef();
    }

    UNSAFE_componentWillUpdate() {
        this.user_name.current.focus();
    }

    handleSubmitLogin = event => {
        event.preventDefault();
        this.setState({error: null});
        
        const loginUser = {
            user_name: this.user_name.current.value,
            password: this.user_password.current.value,
        };

        this.user_name.current.value = '';
        this.user_password.current.value = '';

        ApiServices.postAuth(loginUser)
            .then(token => {
                TokenServices.insertToken(token.authToken);
                this.props.redirectOnLoginSuccess();
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render() {
        return(
            <div className='LoginForm__container'>
                <form className='LoginForm' onSubmit={this.handleSubmitLogin}>
                    <div role='alert'>
                        {this.state.error && <p>There was a problem authenticating your credentials. Please try again.</p>}
                    </div>
                    <div className='row'>
                        <label htmlFor='user_name'>User name:</label>
                        <input type='text' name='user_name' id='user_name' ref={this.user_name } autoFocus  spellCheck='off' autoCorrect='off' required />
                    </div>
                    <div className='row'>
                        <label htmlFor='user_password'>Password:</label>
                        <input type='password' name='user_password' id='user_password' ref={this.user_password}  spellCheck='off' autoCorrect='off' required />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    };
};

export default SignInForm;
