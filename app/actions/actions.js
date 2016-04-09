export const setPlayingVideo = (video) => {
	return {
		type: 'SET_PLAYING',
		video
	};
};

export const setVideoList = (videoList) => {
	return {
		type: 'SET_LIST',
		videoList
	};
};