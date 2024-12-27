module.exports = class User {
    constructor(id, name, lastName, email, consentCode, consentCodeDate) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.consentCode = consentCode,
        this.consentCodeDate = consentCodeDate
    }
};
