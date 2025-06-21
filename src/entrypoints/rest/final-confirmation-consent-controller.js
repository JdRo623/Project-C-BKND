const {
    updateConsentRepository,
    getOneConsentRepository,
} = require('../../dataproviders/repositories/consent-repository');
const { findUser } = require('../../dataproviders/repositories/user-repository');

// Constants for better maintainability
const CONSENT_STATUS = {
    PENDING: 'SV',
    APPROVED: 'A',
    REJECTED: 'X'
};

exports.controller = async (req, res) => {
    try {
        // Input validation
        const { consentId, consentCode, isApproved } = req.body;
        
        if (!consentId || !consentCode || typeof isApproved !== 'boolean') {
            return res.status(400).json({
                msg: 'Faltan campos requeridos: consentId, consentCode, o isApproved',
                errorCode: '400'
            });
        }

        // Fetch consent and user data
        const consent = await getOneConsentRepository({ _id: consentId });
        const user = await findUser({ consentCode });

        // Validate that consent and user exist
        if (!consent) {
            return res.status(404).json({
                msg: 'Consentimiento no encontrado',
                errorCode: '404'
            });
        }

        if (!user) {
            return res.status(404).json({
                msg: 'Usuario no encontrado',
                errorCode: '404'
            });
        }

        // Check if user is authorized to update this consent
        const isAuthorizedUser = user._id == consent.id_user_s || user._id == consent.id_user_r;
        if (!isAuthorizedUser) {
            return res.status(403).json({
                msg: 'Usuario no autorizado para actualizar este consentimiento',
                errorCode: '403'
            });
        }

        // Only allow status updates if consent is in pending state
        if (consent.status !== CONSENT_STATUS.PENDING) {
            return res.status(400).json({
                msg: 'El consentimiento no está en estado pendiente para confirmación',
                errorCode: '400'
            });
        }

        // Determine new status based on approval
        const newStatus = isApproved ? CONSENT_STATUS.APPROVED : CONSENT_STATUS.REJECTED;
        
        // Update consent
        const response = await updateConsentRepository(
            { _id: consentId }, 
            { status: newStatus }
        );

        return res.status(200).json(response);

    } catch (error) {
        console.error('Error in final confirmation consent controller:', error);
        return res.status(500).json({
            msg: 'Error interno del servidor',
            errorCode: '500'
        });
    }
};
