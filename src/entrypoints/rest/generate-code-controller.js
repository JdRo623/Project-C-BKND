const { repository } = require('../../dataproviders/repositories/code-repository');
const { updateUser } = require('../../dataproviders/repositories/user-repository');

exports.controller = async (req, res) => {
    const { id } = req.query;
    var response = {
        msg: '',
        errorCode: '500',
    };
    response = await updateUser(
        {
            _id: id,
        },
        { consentCode: await repository(), consentCodeDate: Date() }
    );

    return res.status(response.errorCode).json(
        response,
    );
};
