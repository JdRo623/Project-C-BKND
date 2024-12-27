module.exports = class Consent {
    constructor(id, date, id_user_s, id_user_r, status) {
        this.id = id;
        this.date = date;
        this.id_user_s = id_user_s;
        this.id_user_r = id_user_r;
        this.status = status;
    }
};