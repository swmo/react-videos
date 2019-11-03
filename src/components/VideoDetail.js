import React from 'react';

/*
const VideoDetail = (props) => {
    const video = props.video ;

    simplified:
*/

const VideoDetail = ({video}) => {
    if(video !== null)
        return (
            <div>
                <div >
                    <iframe width="100%" height="350" title={video.snippet.title} 
                    src={"https://www.youtube.com/embed/" + video.id.videoId} frameBorder="0" 
                    allowFullScreen></iframe>             
                </div> 
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>
                        {video.snippet.description}
                    </p>
                </div>
                
            </div>
    )
    else{
        return <div className="ui segment"> Please search & select a video</div>
    }
}

export default  VideoDetail;