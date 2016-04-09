class VideoPlayerCtrl {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToThis)(this);
  }
  mapStateToThis(state) {
    return {
      nowPlaying: state.nowPlaying
    };
  }
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