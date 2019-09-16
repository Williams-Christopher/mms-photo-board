import React from 'react';
import { Link } from 'react-router-dom';
import TokenServices from '../../services/token-services';
import './Navigation.css';

class Navigation extends React.Component {
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
                    {TokenServices.hasToken()
                        ? null
                        : <li className='NavTop__link'>
                            <Link to='/SignUp'>Sign-up</Link>
                            </li>
                    }
                    
                    {TokenServices.hasToken()
                        ? null
                        : <li className='NavTop__link'>
                            <Link to='/Login'>Login</Link>
                            </li>
                    }

                    {TokenServices.hasToken()
                        ? <li className='NavTop__link'>
                            <Link to='/Logout'>Logout</Link>
                            </li>
                        : null
                    }

                </ul>
            </nav>
        )
    }
};

export default Navigation;
