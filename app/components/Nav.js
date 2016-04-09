class NavCtrl {
}

const navigate = () => {
  return {
    restrict: 'E',
    replace: true,
    controllerAs: 'navCtrl',
    controller: NavCtrl,
    bindToController: true,
    template: require('./Nav.html'),
  };
};


export default navigate;