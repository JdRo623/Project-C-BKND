require('../../commons/global');

exports.passwordRepository = async => {
    let password = '';

    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
        password += CHARACTERS[randomIndex];
    }

    return password;
};


