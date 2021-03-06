const config = require('./config/config');
const app = require('./config/express');
const logger = require('./config/log');
require('./config/mongoose');

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  app.listen(config.port, () => {
    logger.info(`server started on port ${config.port} (${config.env})`);
  });
}

app.get('/', function(req, res) {
  res.sendStatus(200);
});

module.exports = app;
