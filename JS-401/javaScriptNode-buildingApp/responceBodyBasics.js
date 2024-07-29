const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
  let responseBody = "";

  response.on("data", dataChunk => {
    responseBody += dataChunk;
  });

  response.on("end", () => {
      console.log(responseBody);
  });
});

request.on("error", error => {
  console.error(error.message);
});
