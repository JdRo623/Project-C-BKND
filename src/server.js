const logger = require('./configurations/logger');
const exit = require('./configurations/exit');

const app = require('./configurations/app');

const server = app.listen(/*process.env.PORT*/3000, () => {
    logger.info(`node-essential start on port 3000`);
    //logger.info(`node-essential start on port 3000${process.env.PORT}`);
    exit(server);
});
