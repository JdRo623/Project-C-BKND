const {
    updateConsentRepository,
    getOneConsentRepository,
} = require('../../dataproviders/repositories/consent-repository');
const { findUser } = require('../../dataproviders/repositories/user-repository');
exports.controller = async (req, res) => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };
    const consent = await getOneConsentRepository({ _id: req.body.consentId });
    const user = await findUser({ consentCode: req.body.consentCode });

    if (consent.status == 'A')
        return res.status(response.errorCode).json(
            response,
        );

    if (consent.status == 'R')
        return res.status(response.errorCode).json(
            response,
        );

    if (user._id == consent.id_user_s || user._id == consent.id_user_r) {
        const updateFilters = { _id: req.body.consentId };
        const update = { status: 'SV' };
        if (consent.status == 'SV') {
            update.status = 'A';
        }
        response = await updateConsentRepository(updateFilters, update);
    }
    return res.status(response.errorCode).json(
        response,
    );
};
