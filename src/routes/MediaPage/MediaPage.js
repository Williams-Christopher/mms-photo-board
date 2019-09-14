import React from 'react';
import MediaItem from '../../components/MediaItem/MediaItem';
import './MediaPage.css';

class MediaPage extends React.Component {
    // fetch media
    render() {
        return (
            <section className='MediaPage'>
              {this.props.media.map(item => <MediaItem key={item.id} {...item} />)}
            </section>
        );
    };
};

export default MediaPage;
