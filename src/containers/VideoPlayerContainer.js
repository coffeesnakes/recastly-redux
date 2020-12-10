import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (state) => ({
  video: state.currentVideo,
});

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);


export default VideoPlayerContainer;

