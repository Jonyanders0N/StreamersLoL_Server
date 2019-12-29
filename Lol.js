const request = require("request");

url = 'https://br1.api.riotgames.com/';
apiKey = 'RGAPI-5a04b1d9-0118-464b-a542-f84085981bc0';
endIndex = 100;
beginIndex = 0;
reference = 'lol/summoner/v4/summoners/by-name';


const callApiLol = (name, callback) => {

    request(`${url}/${reference}/${name}?api_key=${apiKey}`, (error, response, body) => {
        if (error) {
            return callback(error);
        }
        return callback(body);
    })
    
}

module.exports.callApiLol = callApiLol;