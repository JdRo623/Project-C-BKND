const express = require('express');
require('express-async-errors');

const dotenv = require('dotenv');
const envs = require('../env');

dotenv.config({ path: envs[process.env.NODE_ENV || 'default'] });

const app = express();

const setUp = require('../setup');
const setDocs = require('../documentation');
const setRoutes = require('../routes');
const setHandlers = require('../handlers');
const setDatabase = require('../database');
const setBodyParser = require('../bodyParser');


setUp(app);
setDocs(app);
setRoutes(app);
setHandlers(app);
setDatabase(app);
setBodyParser(app);

module.exports = app;
