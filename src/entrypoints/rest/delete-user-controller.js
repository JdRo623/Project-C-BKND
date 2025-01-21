const { deleteUser, findUser } = require('../../dataproviders/repositories/user-repository');
const bcrypt = require('bcrypt');

exports.controller = async (req, res) => {
    const { id, currentPassword } = req.body;
    const user = await findUser({ _id: id });

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
        return res.status(401).json({
            msg: 'La contraseña ingresada no es correcta. Inténtalo nuevamente.',
            token: '',
        });
    }

    response = await deleteUser(
        {
            _id: id,
        }
    );
    return res.status(response.errorCode).json(response);
};
