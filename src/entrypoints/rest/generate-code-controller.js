const { repository } = require('../../dataproviders/repositories/code-repository');
const { updateUser, findUser } = require('../../dataproviders/repositories/user-repository');

exports.controller = async (req, res) => {
    const { id } = req.query;
    var response = {
        msg: '',
        errorCode: '500',
    };
    const user = await findUser({ _id: id });
    if (validateTimeDifference(user.consentCodeDate, Date())) {
        response = await updateUser(
            {
                _id: id,
            },
            { consentCode: await repository(), consentCodeDate: Date() }
        );
    }else{
        response = {
            msg: 'Codigo generado exitosamente',
            errorCode: '200',
            code: user.consentCode
        }
    }

    return res.status(response.errorCode).json(
        response,
    );
};

const validateTimeDifference = (date1, date2) => {
    const TEN_MINUTES_IN_MS = 10 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const diffInMs = Math.abs(secondDate - firstDate);
    return diffInMs >= TEN_MINUTES_IN_MS;
};

