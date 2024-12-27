const { controller } = require('../../entrypoints/rest/recover-password-controller');

module.exports = router => {
    router.post('/recoverPassword', controller);
};