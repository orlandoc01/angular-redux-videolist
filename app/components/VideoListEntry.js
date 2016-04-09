class VideoListEntryCtrl {
}

const videoListEntry = () => {
  return {
    restrict: 'E',
    scope: {
    	video: '='
    },
    replace: true,
    controllerAs: 'videoListEntryCtrl',
    controller: VideoListEntryCtrl,
    bindToController: true,
    template: require('./VideoListEntry.html'),
  };
};

export default videoListEntry;