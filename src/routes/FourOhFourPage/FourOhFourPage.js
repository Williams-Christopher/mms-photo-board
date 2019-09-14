import React from 'react';
import { Link } from 'react-router-dom';
import './FourOhFourPage.css';

function FourOhFourPage() {
    return (
        <section className='FourOhFour'>
            <h1>Page not found</h1>
            <p>Head back to you your last page or go <Link to='/'>home</Link>.</p>
        </section>
    );
}

export default FourOhFourPage;
