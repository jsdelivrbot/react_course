import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_KEY = 'AIzaSyAij_oMiRTp8rA6KoqLtJ6Mfk1vrWEW2Nw';




class App extends Component {

    constructor(props){
        super(props);

        this.state = { videos: [],
            selectedVideo: null};
        this.videoSearch('surfboards');
        
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) =>{ 
            this.setState({videos: videos, 
                           selectedVideo: videos[0]});
        });

    };

    render (){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))

//export default class App extends Component {
//  render() {
//    return (
//      <div>Hello There!</div>
//    );
//  }
//}
