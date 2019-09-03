const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
const requestLogStream = fs.createWriteStream(path.join('./', 'production.log'), { flags: 'a' })
app.use(morgan('combined', {stream: requestLogStream}));

// create a write stream (in append mode)
module.exports = app;
