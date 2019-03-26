require('dotenv').config();
const Joi = require('joi');

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
      .allow(['development', 'production', 'test', 'provision'])
      .default('development'),
    SERVER_PORT: Joi.number()
      .default(4040),
  }).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.SERVER_PORT,
    mongooseDebug: envVars.MONGOOSE_DEBUG,
    jwtSecret: envVars.JWT_SECRET,
    frontend: envVars.MEAN_FRONTEND || 'angular',
    mongo: {
      host: envVars.MONGO_HOST,
      port: envVars.MONGO_PORT
    }
  };
  
  module.exports = config;