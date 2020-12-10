import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import SearchContainer from '../containers/SearchContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import store from '../store/store.js';
import handleVideoSearch from '../actions/search.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   videos: [],
    //   currentVideo: null,
    // };


  }

  componentDidMount() {
    store.dispatch(handleVideoSearch('react tutorials'));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
