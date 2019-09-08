import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends React.Component {
    buttonClick() {
        console.log('click!');
    }

    render() {
        return (
            <>
                <div className='About__top'>
                    <article>
                        <p>
                            Sharing photos of interesting things is often fun to do. Sharing them can sometimes be a distracting hassle. You pop onto Facebook or Twitter and immediately are swamped with notifications, memes, cat photos, and some new story about 'Florida Man'. Sometimes it would be nice just to share what you came to share and move on.
                        </p>
                    </article>
                    <img src='https://picsum.photos/300' alt='Placeholder' />
                </div>
                <div className='About__bottom'>
                    <img src='https://picsum.photos/300' alt='More placeholder text' />
                    <article>
                        <p>
                            That's why MMS Photo Board is here. Share what's interesting without distraction. Using simple text messages, send a photo and, optionally, a text caption along with it, just like you'd text a photo to a friend. MMS Photo Board gets your message, posts it, and sends you back a link to your post. If you want, share that link later on another site. Come back to MMS Photo Board and see what others have shared and like what you find interesting.
                        </p>
                    </article>
                </div>
                <Link to='/SignUp'>Sign up now</Link>
            </>
        );
    };
};

export default About;
