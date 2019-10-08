import React from 'react';
import { Link } from 'react-router-dom';
import Phone01 from '../../images/Phone01-min.png'
import Phone02 from '../../images/Phone02-min.png';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <section className='About'>
                <div className='About__top'>
                    <article>
                        <p>
                            Sharing photos of interesting things is often fun to do. Sharing them can also be a distracting hassle. You pop onto Facebook or Twitter and are immediately swamped with notifications, memes, cat photos, and some new story about 'Florida Man'. Sometimes it would be nice just to share what you came to share and move on.
                        </p>
                    </article>
                    <img src={Phone01} alt='Placeholder' />
                </div>
                <div className='About__bottom'>
                    <img src={Phone02} alt='More placeholder text' />
                    <article>
                        <p>
                            That's why MMS Photo Board is here. Share what's interesting without distraction. Open the text message app on your phone, add a photo and an optional text caption with it, and hit the send button - just like you'd text a photo to a friend. MMS Photo Board receives your message and includes it on its photos page. Come back to MMS Photo Board to see what others have shared and like what you find interesting.
                        </p>
                    </article>
                </div>
                <Link to='/SignUp'>Sign up now</Link>
            </section>
        );
    };
};

export default About;
