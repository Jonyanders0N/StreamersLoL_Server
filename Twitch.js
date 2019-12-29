  
const request = require('request');
 
const options = {
    url: 'https://api.twitch.tv/helix/videos?game_id=21779',
    headers: {
      'Client-ID': 'livbjmuyns0m686mhrvlqf1m84jf0i',
      // 'Authorization': 'my-auth-token'
      // 'Content-Type':  'application/json',
    }
  };

const callExternalApiUsingRequest = (callback) => {
    request(options, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;