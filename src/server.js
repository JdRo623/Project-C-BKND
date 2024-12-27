const logger = require('./configurations/logger');
const exit = require('./configurations/exit');

const app = require('./configurations/app');

const server = app.listen(/*process.env.PORT*/3333, () => {
    logger.info(`node-essential start on port 8080${process.env.PORT}`);
    exit(server);
});