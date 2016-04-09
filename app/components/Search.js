import {setVideoList, setPlayingVideo} from '../actions/actions.js';
import searchYoutube from '../utils/utils.js';

class SearchCtrl {
  constructor($ngRedux) {
    $ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
  }
  mapStateToThis(state) {
    return {};
  }
  mapDispatchToThis(dispatch) {
    return {
      searchText: (e) => {
        searchYoutube({q: e.target.value})
        .then(q => {
          dispatch(setVideoList(q.items));
          dispatch(setPlayingVideo(q.items[0]));
        })
        .catch(console.error);
      }
    };
  }
}

const search = () => {
  return {
    restrict: 'E',
    replace: true,
    controllerAs: 'searchCtrl',
    controller: SearchCtrl,
    bindToController: true,
    template: require('./Search.html'),
  };
};


export default search;