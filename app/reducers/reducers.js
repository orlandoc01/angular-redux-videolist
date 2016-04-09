import {combineReducers} from 'redux';

const modifyPlayingVideo = (state = {}, action) => {
	switch(action.type) {
		case 'SET_PLAYING':
			return action.video;
		default:
			return state;
	}
};

const modifyVideoList = (state = [], action) => {
	switch(action.type) {
		case 'SET_LIST':
			return action.videoList;
		default:
			return state;
	}
};

const stateHandler = combineReducers({
	videoList: modifyVideoList,
	nowPlaying: modifyPlayingVideo	
});

export default stateHandler