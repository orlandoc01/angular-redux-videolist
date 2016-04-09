class AppCtrl {
}

const createAppCtrl = () => {
 	return () => {
    return {
      url: '/app',
      scope: {},
      access: {restricted: true},
      controllerAs: 'appCtrl',
      controller: AppCtrl,
      bindToController: true,
      template: require('./App.html'),
    };
  };
};


export default createAppCtrl;