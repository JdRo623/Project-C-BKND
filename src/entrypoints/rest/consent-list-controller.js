const { getConsentRepository } = require('../../dataproviders/repositories/consent-repository');

exports.controller = async (req, res) => {
    const filters = [{ id_user_s: req.query.userId }, { id_user_r: req.query.userId }];
    const consentList = await getConsentRepository(filters);
    return res.status(response.errorCode).json(
        consentList,
    );
};
