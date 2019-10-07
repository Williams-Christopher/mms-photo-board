import React from 'react';
import AppContext from '../../context/AppContext';
import MediaItem from '../../components/MediaItem/MediaItem';
import './MediaPage.css';

class MediaPage extends React.Component {
    static contextType = AppContext;
    
    render() {
        return (
            <section className='MediaPage'>
                {this.context.mediaReceived
                    ? this.context.media.map(item => <MediaItem key={item.id} {...item} />)
                    : <div className='MediaPage__spinner'></div>
                }
            </section>
        );
    };
};

export default MediaPage;
