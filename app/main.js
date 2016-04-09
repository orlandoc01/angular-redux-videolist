import angular from 'angular';
import ngRedux from 'ng-redux';
import stateHandler from './reducers/reducers.js';
import angular_ui_router from 'angular-ui-router';
import createAppCtrl from './components/App.js';
import createNavCtrl from './components/Nav.js';
import createSearchCtrl from './components/Search.js';
import createVideoListCtrl from './components/VideoList.js';
import createVideoListEntryCtrl from './components/VideoListEntry.js';
import createVideoPlayerCtrl from './components/VideoPlayer.js';

angular.module('videoList', [ngRedux, angular_ui_router])
	.config(($stateProvider, $ngReduxProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise('/app');
		$stateProvider
			.state('app', createAppCtrl())

		$ngReduxProvider.createStoreWith(stateHandler);
	})
	.directive('nav', createNavCtrl())
	.directive('search', createSearchCtrl())
	.directive('videoList', createVideoListCtrl())
	.directive('videoListEntry', createVideoListEntryCtrl())
	.directive('videoPlayer', createVideoPlayerCtrl())