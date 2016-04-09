import {setPlayingVideo} from '../actions/actions.js';

class VideoListCtrl {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
  }
  mapStateToThis(state) {
    return {
      videoList: state.videoList
    };
  }
  mapDispatchToThis(dispatch) {
    return {
      itemClick: (vid) => {
        dispatch(setPlayingVideo(vid));
      }
    };
  }
}

const videoList = () => {
  return {
    restrict: 'E',
    replace: true,
    controllerAs: 'videoListCtrl',
    controller: VideoListCtrl,
    bindToController: true,
    template: require('./VideoList.html'),
  };
};


export default videoList;