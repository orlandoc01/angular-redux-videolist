class AppCtrl {
}

const createAppCtrl = () => {
 	return () => {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      controllerAs: 'appCtrl',
      controller: AppCtrl,
      bindToController: true,
      template: require('./App.html'),
    };
  };
};


export default createAppCtrl;