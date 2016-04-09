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
      template: require('./videoPlayerCtrl.html'),
    };
  };
};


export default createVideoPlayerCtrl