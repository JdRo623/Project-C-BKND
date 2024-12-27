const { controller } = require('../../entrypoints/rest/change-password-controller');

module.exports = router => {
    router.post('/changePassword', controller);
};