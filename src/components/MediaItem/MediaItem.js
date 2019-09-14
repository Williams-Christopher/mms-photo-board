import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './MediaItem.css';

class MediaItem extends React.Component {
    render() {
        return (
            <div className='MediaItem'>
                <img className='MediaItem__media' src={this.props.url} alt={''} />
                <p className='MediaItem__caption'><em>{this.props.caption}</em></p>
                <div className='MediaItem__footer'>
                    <p className='MediaItem__likes_text'>
                        <FontAwesomeIcon icon={'thumbs-up'} style={{color: 'blue'}}/>
                        {this.props.likes !== 0
                            ? <span className='MediaItem__likes_count'>{this.props.likes}</span>
                            : null
                        }
                    </p>

                    <p className='MediaItem__place_name'>
                        <FontAwesomeIcon icon={'map-marked-alt'} style={{color: 'green'}} size='sm' />
                        {this.props.place_name}
                    </p>
                </div>
            </div>
        );
    };
};

export default MediaItem;
