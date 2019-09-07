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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a justo ac lorem venenatis volutpat. Ut at urna luctus, pharetra ex ut, tempus libero. Phasellus dictum eleifend mi. Nulla vitae feugiat sem, at euismod felis. Vivamus ullamcorper, enim at iaculis faucibus, turpis nisi ullamcorper orci, vitae rutrum quam est id diam. Maecenas sollicitudin purus est, vitae consequat orci mollis eu. Nullam vehicula lobortis enim nec ultricies. Duis lobortis ut tellus id elementum. Aenean tortor nulla, convallis eu eleifend ut, condimentum eget elit. </p>
                    </article>
                    <img src='https://picsum.photos/300' alt='Placeholder' />
                </div>
                <div className='About__bottom'>
                    <img src='https://picsum.photos/300' alt='More placeholder text' />
                    <article>
                        <p>Ut in metus eu sapien vestibulum ultrices quis vel tellus. Nam pharetra tempor dolor, consectetur viverra sapien ultricies ut. Donec lacinia aliquam erat. Ut sed pretium metus. Quisque hendrerit nunc in sollicitudin posuere. Sed tempus imperdiet tellus, sit amet volutpat lacus tempor non. Vivamus lobortis urna sodales mauris condimentum, vitae eleifend purus efficitur. Proin et molestie urna. Aliquam eget purus ipsum.</p>
                    </article>
                </div>
                <Link to='/SignUp'>Sign up now</Link>
            </>
        );
    };
};

export default About;
