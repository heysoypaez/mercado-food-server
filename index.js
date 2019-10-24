const express = require("express");
const app = express();
const { config } = require("./config/index.js");
const contentfulApi = require("./routes/contentful.js");
const uploadEntries = require("./services/uploadEntries.js");

//body parser
app.use(express.json());
contentfulApi(app);
uploadEntries(app)

app.listen(config, () => {
	console.log(`Listening http://localhost:${config.port}`);
});
