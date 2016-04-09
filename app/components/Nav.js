class NavCtrl {
}

const createNavCtrl = () => {
 	return () => {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      controllerAs: 'navCtrl',
      controller: NavCtrl,
      bindToController: true,
      template: require('./Nav.html'),
    };
  };
};


export default createNavCtrl;