const { controller } = require('../../entrypoints/rest/reject-consent-controller');

module.exports = router => {
    router.post('/rejectConsent', controller);
};