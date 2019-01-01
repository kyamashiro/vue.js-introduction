let Vue = require('vue');

let auth = {
    login: function (id, pass) {
        return ({userid: id, password: pass})
    }
};

module.exports = Vue.extend({
    template: '#login-template',
    data: function () {
        return {
            userid: '',
            password: '',
        }
    },
    methods: {
        login: function () {
            return auth.login(this.userid, this.password)
        }
    }
});