import Ember from 'ember';

const {
  RSVP
} = Ember;

export default {
  apiUrl(videoId) {
    return `http://gdata.youtube.com/feeds/api/videos/${videoId}`;
  },
  embedUrl(videoId) {
    return `http://www.youtube.com/embed/${videoId}?autoplay=1`;
  },
  thumbnailUrl(videoId) {
    return RSVP.resolve(`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  }
};
