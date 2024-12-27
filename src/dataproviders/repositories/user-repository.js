const ConsentUser = require('../../dataproviders/database/models/userSchema');

exports.createUser = async (
    name,
    lastName,
    email,
    password,
    consentCode,
    consentCodeDate,
    status
) => {
    try {
        const user = new ConsentUser({ name, lastName, email, 
            password: password,
            consentCode: email,
            consentCodeDate: 'NA',
            status: "A"
          });
        await user.save();
    } catch (error) {
        return {
            msg: error,
            errorCode: '500',
        };
    }
};

exports.findUser = async filters => {
    try {
        return ConsentUser.findOne(
            filters //{ name: 'John Doe' }, // Filter
        );
    } catch (error) {
        return {
            msg: error,
            errorCode: '500',
        };
    }
};

exports.updateUser = async (filter, update) => {
    try {
        const val = await ConsentUser.updateOne(filter, { $set: update })
        if(val.modifiedCount == 0){
            return {
                msg: 'Intentelo nuevamente',
                errorCode: '400',
            }
        }
        return response = {
            msg: 'Codigo generado exitosamente',
            errorCode: '200',
            code: update.consentCode
        };

    } catch (error) {
        return {
            msg: error,
            errorCode: '500',
        };
    }

};
