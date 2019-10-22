const express = require("express");
const app = express();
const { config } = require("./config/index.js");
const contentfulApi = require("./routes/contentful.js");

//body parser
app.use(express.json());
contentfulApi(app);


app.listen(config, () => {
	console.log(`Listening http://localhost:${config.port}`);
});
