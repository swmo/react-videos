import React from 'react';

/*
const VideoDetail = (props) => {
    const video = props.video ;
    simplified:
*/

const VideoDetail = ({video}) => {
    if(video !== null){

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div>
                <div className="ui embed">
                    <iframe 
                        width="100%" 
                        height="350" 
                        title={video.snippet.title} 
                        src={videoSrc} 
                        frameBorder="0" 
                        allowFullScreen
                    >
                    </iframe>             
                </div> 
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>
                        {video.snippet.description}
                    </p>
                </div>
                
            </div>
        )
    }
    else{
        return null;
    }
}

export default  VideoDetail;
