const { env } = process;

module.exports = `postgres://${env.DANGER_INTEGRATION_USER}:${env.DANGER_INTEGRATION_PASSWORD}`
+ `@${env.DANGER_INTEGRATION_HOST}:${env.DANGER_INTEGRATION_PORT}/${env.DANGER_INTEGRATION_DATABASE}`;
