const ConsentUser = require('../database/models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginUserRepository = async req => {
    try {
        const { email, password } = req.body;
        const user = await ConsentUser.findOne(
            { email: email } //{ name: 'John Doe' }, // Filter
        );
        if (!user) {
            return {
                msg: 'Authentication failed',
                errorCode: '401',
                token: '',
            }
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return {
                msg: 'Authentication failed',
                errorCode: '401',
                token: '',
            }
        }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
            expiresIn: '1h',
        });

        user.token = token
        delete user.password
        return {
            msg: 'Authentication granted',
            errorCode: '200',
            user: {
                id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                token: user.token
            }
        }
    } catch (error) {
        return{
            msg: 'Error: '+error,
            errorCode: '500',
            token: '',
        }
    }
};
