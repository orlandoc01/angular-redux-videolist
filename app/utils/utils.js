const YOUTUBE_API_KEY = 'AIzaSyDvEaPTlv9zYqaGE9u-Tw5dq_YyDRKG3Uwloc';


let searchYoutube = (options, callback) => {
  return new Promise((resolve, reject) => {
    const defaults = {
        part: 'snippet',
        key: YOUTUBE_API_KEY,
        type: "video",
        max: 5,
        videoEmbeddable: true
      };
    $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search",
      cache: false,
      type: 'GET',
      data: _.merge(defaults, options),
      dataType: 'json',
      success: resolve,
      error: reject
    });
  });
};

export default searchYoutube;