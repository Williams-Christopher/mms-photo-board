import React from 'react';
import AppContext from '../../context/AppContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './MediaItem.css';
import ApiServices from '../../services/api-service';

class MediaItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            fetchComplete: false,
        };
    }
    
    static contextType = AppContext;

    likeClickHandler = mediaId => {
        this.setState({error: null});
        
        ApiServices.postMedia(mediaId)
            .then(newLikeCount =>{
                this.context.updateLikeCount(mediaId, newLikeCount.newLikes);
            })
            .catch(error => this.setState({error}))
    }

    render() {
        return (
            <div className='MediaItem'>
                <img className='MediaItem__media' src={this.props.media_url} alt={''} />
                <p className='MediaItem__caption'><em>{this.props.media_caption}</em></p>
                <div className='MediaItem__footer'>
                    <p className='MediaItem__likes_text'>
                        {this.context.isLoggedIn
                            ? <FontAwesomeIcon icon={'thumbs-up'} style={{color: '#2F496E', backgroundColor: '#2988BC'}} onClick={() => this.likeClickHandler(this.props.id)} />
                            : <FontAwesomeIcon icon={'thumbs-up'} style={{color: '#F2F4F2', backgroundColor: '#2988BC'}} onClick={() => alert('You must be signed in to do this.')} />
                        }
                        {this.props.likes != 0
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
