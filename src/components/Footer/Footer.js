import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

function Footer(props) {
    return (
        <footer role='content-info' className='Footer'>
 
            <p>Created in Austin, Texas by Christopher Williams</p>
            <a href='https://github.com/Williams-Christopher/mms-photo-board'
                target='_blank'
                rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    Github
            </a>
            <a href='mailto:MMSPhotoBoard@chriswillia.ms'>
                    <FontAwesomeIcon icon={'at'} />
                    Email
            </a>

        </footer>
    );
};

export default Footer;
