import angular from 'angular';
import ngRedux from 'ng-redux';
import stateHandler from './reducers/reducers.js';
import angular_ui_router from 'angular-ui-router';
import createAppCtrl from './components/App.js';

angular.module('videoList', [ngRedux, angular_ui_router])
	.config(($stateProvider, $ngReduxProvider, $urlRouterProvider) => {
		$urlRouterProvider.otherwise('/app');
		$stateProvider
			.state('app', createAppCtrl())

		$ngReduxProvider.createStoreWith(stateHandler);
	})