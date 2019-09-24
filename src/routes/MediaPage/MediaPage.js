import React from 'react';
import AppContext from '../../context/AppContext';
import MediaItem from '../../components/MediaItem/MediaItem';
import './MediaPage.css';

class MediaPage extends React.Component {
    static contextType = AppContext;
    
    render() {
        return (
            <section className='MediaPage'>
              {this.context.media.map(item => <MediaItem key={item.id} {...item} />)}
            </section>
        );
    };
};

export default MediaPage;
