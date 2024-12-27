const { controller } = require('../../entrypoints/rest/signup-controller');

module.exports = router => {
    router.post('/signup', controller);
};