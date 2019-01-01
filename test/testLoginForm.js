const assert = require('assert');
const loginForm = require('../components/loginForm');

describe("login()", function () {
        let vm;
        beforeEach(function () {
            vm = new loginForm()
        });

        //userid, passwordの初期値を確認
        it('check initial values', function () {
            assert.equal(vm.userid, '');
            assert.equal(vm.password, '');
        });

        //login()メソッドの返り値をテスト
        it('check returned values - login()', function () {
            vm.userid = 'testuser';
            vm.password = 'password';
            let result = vm.login();
            assert.deepStrictEqual(result, {userid: 'testuser', password: 'password'})
        })
    }
);