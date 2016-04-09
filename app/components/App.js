class AppCtrl {
}

let app = () => {
  return {
    url: '/app',
    controllerAs: 'appCtrl',
    controller: AppCtrl,
    bindToController: true,
    template: require('./App.html'),
  };
};


export default app;