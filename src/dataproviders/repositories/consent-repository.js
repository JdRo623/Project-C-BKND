const Consent = require('../database/models/consentSchema');

exports.createConsentRepository = async req => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };

    const consent = new Consent({
        date: Date(),
        id_user_s: req.id_user_s,
        id_user_r: req.id_user_r,
        status: 'FV',
    });
    try {
        await consent.save().then(val => {
            response = {
                msg: 'Consentimiento creado exitosamente',
                errorCode: '200',
            };
        });
    } catch (error) {
        response = {
            msg: 'Error: ' + error,
            errorCode: '500',
        };
    }

    return response;
};

exports.getConsentRepository = async filters => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };
    try {
        response = await Consent.find({
            $or: filters,
        })
    } catch (error) {
        response = {
            msg: 'Error: ' + error,
            errorCode: '500',
        };
    }
    return response;
};

exports.getOneConsentRepository = async filter => {
    try {
        return Consent.findOne(
            filter //{ name: 'John Doe' }, // Filter
        );
    } catch (error) {
        return {
            msg: error,
            errorCode: '500',
        };
    }
};


exports.updateConsentRepository = async (filter, update) => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };
    try {
        await Consent.updateOne(
            filter,//{ name: 'John Doe' }, // Filter
            { $set: update/*{ email: 'john.doe@newdomain.com' } */} // Update
        ).then(val => {
            response = {
                msg: 'Consentimiento actualizado exitosamente',
                errorCode: '200',
            };
        });
    } catch (error) {
        response = {
            msg: error,
            errorCode: '500',
        };
    }

    return response;
};
