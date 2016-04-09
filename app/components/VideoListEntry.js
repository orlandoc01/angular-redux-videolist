class VideoListEntryCtrl {
}

const createVideoListEntryCtrl = () => {
  return () => {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      controllerAs: 'videoListCtrl',
      controller: VideoListCtrl,
      bindToController: true,
      template: require('./VideoListEntry.html'),
    };
  };
};


export default createVideoListEntryCtrl