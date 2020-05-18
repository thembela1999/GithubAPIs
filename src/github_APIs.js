var request = require('request');

options = {
    url: "https://api.github.com/users/:thembela1999",
    headers: {
        "User-Agent": "thembela1999"
    }
}

request.get(options)
    .on('response', function(response) {
        console.log(response.statusCode);
        console.log(JSON.stringify(response));
    });