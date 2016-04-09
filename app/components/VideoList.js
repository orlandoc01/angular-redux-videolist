import {setVideoList} from '../actions/actions.js';

class VideoListCtrl {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this)
  }
  mapStateToThis(state) {
    return {
      videoList: state.videoList
    };
  }
  mapDispatchToThis(dispatch) {
    return {
      itemClick: (vid) => {
        setVideoList(vid);
      };
    };
  }
}

const createVideoListCtrl = () => {
 	return () => {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      controllerAs: 'videoListCtrl',
      controller: VideoListCtrl,
      bindToController: true,
      template: require('./VideoList.html'),
    };
  };
};


export default createVideoListCtrl