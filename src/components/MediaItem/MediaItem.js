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
            likes: null,
            fetchComplete: false,
        };
    }
    static contextType = AppContext;

    componentDidMount() {
        this.setState({
            likes: this.props.likes
        })
    }

    likeClickHandler = mediaId => {
        this.setState({error: null});
        ApiServices.postMedia(mediaId)
            .then(newLikeCount =>{
                console.log(newLikeCount);
                this.setState({likes: newLikeCount.newLikes})
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
                            ? <FontAwesomeIcon icon={'thumbs-up'} style={{color: 'blue'}} onClick={() => this.likeClickHandler(this.props.id)} />
                            : <FontAwesomeIcon icon={'thumbs-up'} style={{color: 'grey'}} onClick={() => alert('You must be signed in to do this.')} />
                        }
                        {console.log(this.state)}
                        {(this.state.likes || this.props.likes) !== 0
                            ? <span className='MediaItem__likes_count'>{this.state.likes || this.props.likes}</span>
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
