console.log("running file");

//importing dotenv package
require("dotenv").config();

//importing keys
keys = require("keys");

//setting spotify keys
var spotify = new Spotify(keys.spotify);

var cmd = process.argv[2];

console.log("running file");

switch(cmd) {
    case "spotify-this-song":
        console.log("called search");
        spotify.search({
            type: 'track',
            query: process.argv[3],
            limit: 1
        }, (err, data) => {
            if (err) { console.log("Error: " + err) };
            console.log("log data");
            console.log(data);
            // [
            //     ['Song Name     ', data.tracks.items[0].name],
            //     ['Preview Link  ', data.tracks.items[0].preview_url],
            //     ['Album         ', data.tracks.items[0].album.name]
            // ].forEach(element => {
            //     twinLog(`${element[0]}: ${element[1]}`);
            // });
        });
}