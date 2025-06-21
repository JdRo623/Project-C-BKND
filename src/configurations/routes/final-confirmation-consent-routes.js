const { controller } = require('../../entrypoints/rest/final-confirmation-consent-controller');

module.exports = router => {
    router.post('/finalConfirmationConsent', controller);
};
