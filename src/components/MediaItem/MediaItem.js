import React from 'react';
import AppContext from '../../context/AppContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './MediaItem.css';

class MediaItem extends React.Component {
    static contextType = AppContext;

    likeClick = mediaId => {
        console.log('mediaId: ', mediaId);
    }

    render() {
        return (
            <div className='MediaItem'>
                <img className='MediaItem__media' src={this.props.media_url} alt={''} />
                <p className='MediaItem__caption'><em>{this.props.media_caption}</em></p>
                <div className='MediaItem__footer'>
                    <p className='MediaItem__likes_text'>
                        {this.context.isLoggedIn
                            ? <FontAwesomeIcon icon={'thumbs-up'} style={{color: 'blue'}} onClick={() => this.likeClick(this.props.id)} />
                            : <FontAwesomeIcon icon={'thumbs-up'} style={{color: 'grey'}} onClick={() => alert('You must be signed in to do this.')} />
                        }
                        {this.props.likes !== 0
                            ? <span className='MediaItem__likes_count'>{this.props.likes}</span>
                            : null
                        }
                    </p>

                    <p className='MediaItem__place_name'>
                        <FontAwesomeIcon icon={'map-marked-alt'} style={{color: 'green'}} size='sm' />
                        {this.props.media_location}
                    </p>
                </div>
            </div>
        );
    };
};

export default MediaItem;
