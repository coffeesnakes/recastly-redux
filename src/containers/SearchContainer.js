import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = (state) => ({
  currentVideo: state.currentVideo
});

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (query) => dispatch(handleSearchChange(query))
});

var SearchContainer = connect(
  mapStateToProps, mapDispatchToProps)(Search);


export default SearchContainer;
