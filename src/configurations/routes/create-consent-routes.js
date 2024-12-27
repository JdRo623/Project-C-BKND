const { controller } = require('../../entrypoints/rest/create-consent-controller');

module.exports = router => {
    router.post('/createConsent', controller);
};
