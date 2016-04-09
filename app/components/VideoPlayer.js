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

const videoPlayer = () => {
  return {
    restrict: 'E',
    replace: true,
    controllerAs: 'videoPlayerCtrl',
    controller: VideoPlayerCtrl,
    bindToController: true,
    template: require('./VideoPlayer.html'),
  };
};

export default videoPlayer