const { getConsentRepository } = require('../../dataproviders/repositories/consent-repository');

exports.controller = async (req, res) => {

    const userFilters = [{ id_user_s: req.query.userId }, { id_user_r: req.query.userId }];
    const filters = {
        $and: [
            { $or: userFilters },
            { status: { $ne: 'X' } }  // Exclude consents with status 'X'
        ]
    };
    const response = await getConsentRepository(filters);
    return res.status(response.errorCode).json(
        response.consentList,
    );
};
