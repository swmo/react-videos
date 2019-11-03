import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';

import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {

    state = {videos: [], videoSelected: null} 
    
    callbackOnSearchSubmit = async (term) => {
        if(term === '') {
            this.setState({videos: []});
        }
        else {
            const response = await youtube.get('/search',{
                params: {
                part: 'snippet',
                maxResult: 5,
                key: 'AIzaSyBaDdIj5cuPqs-oHEIkiDKVDb_lqVBFNrI',
                q: term
            }});
            console.log('set videos:');
            this.setState({videos: response.data.items});
        }
    }

    callbackOnVideoSelect = (video) => {
        this.setState({videoSelected: video});
        console.log('set video:');
        console.log(video);
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}} >
                <div className="ui grid">
                    <div className="sixteen wide column">
                        <SearchBar callbackOnSearchSubmit={this.callbackOnSearchSubmit} />
                    </div>
                    <div className="ten wide column">
                        <VideoDetail video={this.state.videoSelected} />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={this.state.videos} callbackOnVideoSelect={this.callbackOnVideoSelect} />
                    </div>
                </div>
            </div>
        );
    }
}

export default  App;