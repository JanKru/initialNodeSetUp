const Joi = require('joi');
require('dotenv').config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
      .allow(['development', 'production', 'test', 'provision'])
      .default('development'),
  SERVER_PORT: Joi.number().default(8000),
  MONGO_HOST: Joi.string().required().description('Mongo DB host url'),
  MONGO_PORT: Joi.number().default(27017),
}).unknown().required();

const {
  error,
  value: envVars,
} = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  jwtSecret: envVars.JWT_SECRET,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
  },
};

module.exports = config;
