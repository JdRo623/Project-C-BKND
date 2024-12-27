const { passwordRepository } = require('../../dataproviders/repositories/password-repository');
const { sendEmail } = require('../../commons/util/sendEmail');
const { updateUser } = require('../../dataproviders/repositories/user-repository');
const bcrypt = require('bcrypt');

exports.controller = async (req, res) => {
    const { email } = req.body;
    const password = await passwordRepository();
    const hashedPassword = await bcrypt.hash(password, 10);
    response = await updateUser(
        {
            email: email,
        },
        { password: hashedPassword }
    );
    await sendEmail(
        email,
        'Solicitud nueva clave de acceso',
        { name: '', password: password },
        './template/recoverPassword.handlebars'
    );
    return res.status(response.errorCode).json(
        response,
    );
};
