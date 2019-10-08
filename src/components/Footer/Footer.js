import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

function Footer(props) {
    return (
        <footer role='contentinfo' className='Footer'>
 
            <p>Created in Austin, Texas by Christopher Williams</p>
            <a href='mailto:MMSPhotoBoard@chriswillia.ms'>
                Have a question? Need support? <FontAwesomeIcon icon={'envelope'} />
            </a>

        </footer>
    );
};

export default Footer;
