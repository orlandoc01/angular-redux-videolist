class VideoListEntryCtrl {
}

const videoListEntry = () => {
  return {
    restrict: 'E',
    scope: {
    	video: '='
    },
    replace: true,
    controllerAs: 'videoListCtrl',
    controller: VideoListEntryCtrl,
    bindToController: true,
    template: require('./VideoListEntry.html'),
  };
};

export default videoListEntry;