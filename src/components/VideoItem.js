import React from 'react';

class VideoItem extends React.Component {

    state = {video: this.props.video}

    onVideoSelect = (e) => {
        e.preventDefault();
        this.props.callbackOnVideoSelect(this.state.video);
    }

    render(){
        const video = this.state.video;
        return (
            <a onClick={this.onVideoSelect} className="item" > 
                <div className="image">
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                </div>
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                    <div className="meta">
                        <span>{video.snippet.description} </span>
                    </div>
                </div>
            </a>
        );
    }
}

export default  VideoItem;
