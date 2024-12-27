const { controller } = require('../../entrypoints/rest/consent-list-controller');

module.exports = router => {
    router.get('/getConsents', controller);
};
