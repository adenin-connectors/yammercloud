'use strict';

const cfActivity = require('@adenin/cf-activity');
const api = require('./common/api');

module.exports = async function (activity) {
  try {
    api.initialize(activity);

    const response = await api('/messages/my_feed.json');

    if (!cfActivity.isResponseOk(activity, response)) {
      return;
    }
    
  } catch (error) {
    cfActivity.handleError(activity, error);
  }
};
