const { controller } = require('../../entrypoints/rest/login-controller');

module.exports = router => {
    router.post('/login', controller);
};