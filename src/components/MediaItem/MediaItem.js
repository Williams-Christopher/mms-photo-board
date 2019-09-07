import React from 'react';
import './MediaItem.css';

class MediaItem extends React.Component {
    render() {
        return (
            <div className='MediaItem'>
                    <img className='MediaItem__media' src={this.props.url} alt={''} />
                    <p className='MediaItem__caption'><em>{this.props.caption}</em></p>
                    <button className='MediaItem__like_button'>Like</button>
                    {this.props.likes !== 0
                        ? <p className='MediaItem__likes_text'>Likes: <span className='board-item-likes-count'>{this.props.likes}</span></p>
                        : null
                    }

                    
                </div>
        );
    };
};

export default MediaItem;
