const GOOGLE_API_KEYS = "AIzaSyCN7QXr2LqKdc6cExvHamjIJ_u9nUGcYFE";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEYS;

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
  GOOGLE_API_KEYS;

export const YOUTUBE_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  GOOGLE_API_KEYS +
  "&q=";
export const SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=AIzaSyCN7QXr2LqKdc6cExvHamjIJ_u9nUGcYFE
