const { controller } = require('../../entrypoints/rest/confirm-consent-controller');

module.exports = router => {
    router.post('/confirmConsent', controller);
};
