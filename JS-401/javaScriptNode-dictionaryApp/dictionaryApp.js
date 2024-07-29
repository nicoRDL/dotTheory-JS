const https = require("https");

function getDefinition(term) {
  try {
    const request = https.get(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=2a7bb58b-cffb-424c-a472-38008fbb0a75`,
      (response) => {
        let body = "";
        response.on("data", (data) => {
          body += data.toString();
        });

        response.on("end", () => {
          const definition = JSON.parse(body);
          console.log(definition[0].shortdef);
        });
      }
    );
    request.on("error", (error) => console.error(error.message));
  } catch (error) {
    console.error(error.message);
  }
}

const query = process.argv.slice(2);
query.forEach(getDefinition);
