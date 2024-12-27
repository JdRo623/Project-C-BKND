const { controller } = require('../../entrypoints/rest/generate-code-controller');

module.exports = router => {
    router.get('/generateCode', controller);
};
