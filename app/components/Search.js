class SearchCtrl {
}

const createSearchCtrl = () => {
 	return () => {
    return {
      restrict: 'E',
      scope: {},
      replace: true,
      controllerAs: 'searchCtrl',
      controller: SearchCtrl,
      bindToController: true,
      template: require('./Search.html'),
    };
  };
};


export default createNavCtrl;