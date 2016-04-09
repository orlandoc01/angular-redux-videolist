class VideoListCtrl {
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