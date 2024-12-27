const { createConsentRepository } = require('../../dataproviders/repositories/consent-repository');
const { findUser } = require('../../dataproviders/repositories/user-repository');
exports.controller = async (req, res) => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };

    user = await findUser({consentCode: req.body.consentCode})
    var consentInfo = {
        id_user_s: req.body.id_user_s,
        id_user_r: user._id,
    }
    response = await createConsentRepository(consentInfo);

    return res.status(response.errorCode).json(response);
};
