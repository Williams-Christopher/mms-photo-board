import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <nav role="navigation" className='NavTop'>
                <div className='NavTop__container'>
                    <h1 className='NavTop__title'>
                        Photo Board
                    </h1>
                    <ul className='NavTop__links'>
                        <li className='NavTop__link'>
                            <Link to='#'>About</Link>   
                        </li>
                        <li className='NavTop__link'>
                            <Link to='#'>Sign-up</Link>   
                        </li>
                        <li className='NavTop__link'>
                            <Link to='#'>Login</Link>   
                        </li>
                        <li className='NavTop__link'>
                            <Link to='#'>Logout</Link>   
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Navigation;
