import angular from 'angular';
import ngRedux from 'ng-redux';
import stateHandler from './reducers/reducers.js';
import angular_ui_router from 'angular-ui-router';
import app from './components/App.js';
import navigate from './components/Nav.js';
import search from './components/Search.js';
import videoList from './components/VideoList.js';
import videoListEntry from './components/VideoListEntry.js';
import videoPlayer from './components/VideoPlayer.js';

angular.module('angularVideoList', [ngRedux])
	.config(($ngReduxProvider) => {
		$ngReduxProvider.createStoreWith(stateHandler);
	})
	.directive('app', app)
	.directive('navigate', navigate)
	.directive('search', search)
	.directive('videoList', videoList)
	.directive('videoListEntry', videoListEntry)
	.directive('videoPlayer', videoPlayer)