const { updateUser, findUser } = require('../../dataproviders/repositories/user-repository');
const bcrypt = require('bcrypt');

exports.controller = async (req, res) => {
    const { id, password, currentPassword } = req.body;
    const user = await findUser({ _id: id });

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
        return res.status(401).json({
            msg: 'Wrong Password',
            token: '',
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    response = await updateUser(
        {
            _id: id,
        },
        { password: hashedPassword }
    );
    return res.status(200).json(response);
};
