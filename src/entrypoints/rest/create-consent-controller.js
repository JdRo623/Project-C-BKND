const { createConsentRepository } = require('../../dataproviders/repositories/consent-repository');
const { findUser } = require('../../dataproviders/repositories/user-repository');
exports.controller = async (req, res) => {
    var response = {
        msg: 'Ha ocurrido un error, por favor inténtalo nuevamente.',
        errorCode: '400',
    };

    user = await findUser({consentCode: req.body.consentCode})
    userS = await findUser({_id: req.body.id_user_s})

    if(req.body.id_user_s == user._id){
        response.msg = "Ha ocurrido un error, ingresa el código único de un tercero para iniciar el consentimiento."
        return res.status(response.errorCode).json(response);
    }

    var consentInfo = {
        id_user_s: req.body.id_user_s,
        email_user_s: userS.email,
        id_user_r: user._id,
        email: user.email
    }
    response = await createConsentRepository(consentInfo);

    return res.status(response.errorCode).json(response);
};
