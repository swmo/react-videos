import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {

    state = {
        videos: this.props.videos
    };

    renderVideos(){
        return this.props.videos.map((video,i) => {
            return (
                <VideoItem video={video} key={'0' + video.id.videoId} callbackOnVideoSelect={this.props.callbackOnVideoSelect}/>
            )
        });
    }

    render(){
        return (
            <div className="ui items divided">{this.renderVideos()}</div>
        );
    }
}

export default VideoList;