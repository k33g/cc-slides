const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('.'));

app.listen(port);
console.log(`🌍 Web Server is started - listening on ${port}`);

