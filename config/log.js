const config = require('./config');
const winston = require('winston');
const moment = require('moment');

const {format} = winston;
const {combine, timestamp, simple, printf, label} = format;
const colorizer = winston.format.colorize();
let logger = {};

const getUTCTime = () => {
  return moment.utc(new Date).format('DD-MM-YYYY HH:mm:ss');
};

winston.loggers.add('console', {
  level: 'silly',
  format: combine(
      label({label: 'dev'}),
      timestamp({
        format: getUTCTime,
      }),
      format.colorize(),
      format.splat(),
      format.simple(),
      printf(({level, message, label, timestamp}) => {
        return `${timestamp} [${level}]: ${message}`;
      })


  ),
  transports: [
    new winston.transports.Console({}),
  ],
});

winston.loggers.add('file', {
  format: combine(
      label({label: 'production'}),
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      simple(),
      format.colorize(),
      printf(({level, message, label, timestamp}) => {
        return `${timestamp} [${label}] ${level}: ${message}`;
      })
  ),
  transports: [
    new winston.transports.File({
      filename: 'production.log',
    }),
  ],
});

if (config.env === 'development') {
  logger = winston.loggers.get('console');
  logger.remove('file');
} else {
  logger = winston.loggers.get('file');
  logger.remove('console');
}

module.exports = exports = logger;
