const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./log');

// connect to mongo db
const mongoUri = config.mongo.host;

mongoose.connect(mongoUri, {keepAlive: 1, useNewUrlParser: true});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

mongoose.connection.on('connected', function() {
  logger.info('MongoDB has connected successfully');
});
