const { repository } = require('../../dataproviders/repositories/code-repository');
const { updateUser, findUser } = require('../../dataproviders/repositories/user-repository');

const MAX_DURATION_IN_SECONDS = 3 * 60;
const MINUTES_IN_MS = MAX_DURATION_IN_SECONDS * 1000;


exports.controller = async (req, res) => {
    const { id } = req.query;
    var response = {
        msg: '',
        errorCode: '500',
    };
    const user = await findUser({ _id: id });
    var timeDifference = getTimeDifference(user.consentCodeDate, Date());
    if (validateTimeDifference(timeDifference)) {
        timeDifference = MAX_DURATION_IN_SECONDS;
        response = await updateUser(
            {
                _id: id,
            },
            { consentCode: await repository(), consentCodeDate: Date() }
        )
    } else {
        response = {
            msg: 'Codigo generado exitosamente',
            errorCode: '200',
            code: user.consentCode,
        }
    }
    response.timeDifference = getValidationTime(timeDifference);
    response.duration = MAX_DURATION_IN_SECONDS;
    return res.status(response.errorCode).json(
        response,
    );
};

const getTimeDifference = (date1, date2) => {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return diffInMs = Math.abs(secondDate - firstDate)
};

const validateTimeDifference = (timeDifference) => {
    return timeDifference >= MINUTES_IN_MS;
};

const getValidationTime = (timeDifference) => {
    return diffInMs = Math.abs(timeDifference - MINUTES_IN_MS)/1000
};


