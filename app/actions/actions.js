export const setPlayingVideo = (video) => {
	return {
		actionType: 'SET_PLAYING',
		video
	};
};

export const setVideoList = (videoList) => {
	return {
		actionType: 'SET_LIST',
		videoList
	};
};