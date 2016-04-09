class VideoPlayerCtrl {
  constructor($ngRedux, $sce) {
    window.player = this;
    $ngRedux.connect((state) => {
      let src = state.nowPlaying.id ? $sce.trustAsResourceUrl('https://www.youtube.com/embed/' +
        state.nowPlaying.id.videoId) : '';

      return {nowPlaying: state.nowPlaying, src};
    })(this);
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