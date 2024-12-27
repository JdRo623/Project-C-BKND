const { updateConsentRepository } = require('../../dataproviders/repositories/consent-repository');

const { findUser } = require('../../dataproviders/repositories/user-repository');
exports.controller = async (req, res) => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };
    response = await updateConsentRepository({ _id: req.body.consentId }, { status: 'R' });
    return res.status(response.errorCode).json(
        response,
    );
};
