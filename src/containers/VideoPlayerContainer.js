import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProp = (state) => ({
  video: state.currentVideo,
});

var VideoPlayerContainer = connect(mapStateToProp)(VideoPlayer);


export default VideoPlayerContainer;

