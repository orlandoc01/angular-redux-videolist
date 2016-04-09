class VideoPlayerCtrl {
}

const createVideoPlayerCtrl = () => {
  return () => {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      controllerAs: 'videoPlayerCtrl',
      controller: VideoPlayerCtrl,
      bindToController: true,
      template: require('./VideoPlayer.html'),
    };
  };
};


export default createVideoPlayerCtrl