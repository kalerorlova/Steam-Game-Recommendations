
const fs = require("fs");
const https = require("https");
const { parser } = require("stream-json");
const { pick } = require("stream-json/filters/Pick")
const { streamArray } = require("stream-json/streamers/StreamArray");

const url = "https://api.steampowered.com/ISteamApps/GetAppList/v2/";
const file = fs.createWriteStream("appidList.json", {flags: "a"});
https.get(url, (res) => {
    if (res.statusCode != 200) {
        console.log("Didn't get the response 200");
        res.resume();
        return;
    }
    res
    .pipe(parser())
    .pipe(pick({ filter: "applist.apps" }))
    .pipe(streamArray())
    .on("data", ({value}) => {
        file.write(`${value.appid}\n`);
    })
    .on("end", () => {
        console.log("Finished processing all games. All id's added.");
        file.end();
    })
});



