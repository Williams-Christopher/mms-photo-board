import React from 'react';
import AppContext from '../../context/AppContext';
import TokenServices from '../../services/token-services';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    static contextType = AppContext;

    handleLogout = () => {
        console.log('handleLogout');
        TokenServices.removeToken();
        console.log('removed token, calling setLoginState');
        this.context.setLoginState();
        console.log('Should have called context.setLoginState()');
    }

    render() {
        return (
            <nav role="navigation" className='NavTop'>
                <h1 className='NavTop__title'>
                    <Link to='/'>
                        MMS Photo Board
                    </Link>
                </h1>
                <ul className='NavTop__links'>
                    <li className='NavTop__link'>
                        <Link to='/About'>About</Link>
                    </li>
                    {this.props.isLoggedIn
                        ? null
                        : <li className='NavTop__link'>
                            <Link to='/SignUp'>Sign-up</Link>
                            </li>
                    }
                    
                    {this.props.isLoggedIn
                        ? null
                        : <li className='NavTop__link'>
                            <Link to='/Login'>Login</Link>
                            </li>
                    }

                    {this.props.isLoggedIn
                        ? <li className='NavTop__link'>
                            <Link onClick={this.handleLogout} to='/'>Logout</Link>
                            </li>
                        : null
                    }
                </ul>
            </nav>
        )
    }
};

export default Navigation;
