const { controller } = require('../../entrypoints/rest/delete-user-controller');

module.exports = router => {
    router.post('/deleteAccount', controller);
};