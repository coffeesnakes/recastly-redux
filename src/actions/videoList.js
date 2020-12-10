var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: 'CHANGE_VIDEO_LIST',
  // pass new video object to update video player
  videos: videos
});

export default changeVideoList;
