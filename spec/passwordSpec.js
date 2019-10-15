describe('is  password valid', function () {
    it('should see if password contains only lowercase', function () {
        let validPassword  = password_is_valid('PASSWORD');
        expect(validPassword ).toEqual(false);
    });

    it('should see if password contains uppercase', function () {
        let validPassword  = password_is_valid('password');
        expect(validPassword ).toEqual(false);
    });

    it('should see if password contains numbers', function () {
        let validPassword = password_is_valid('Password');
        expect(validPassword).toEqual(false);
    });

    it('should see if password is longer than 8 characters', function () {
        let validPassword  = password_is_valid('Pasword1');
        expect(validPassword ).toEqual(false);
    })

    it('should see if password contains at least 1 lowercase, 1 uppercase, 1 number and has to be longer than 8 characters', function () {
        let validPassword  = password_is_valid('Password012');
        expect(validPassword ).toBe(true);
    })
});

describe('is password ok', function () {
    it('should not be void, must have more than 8 characters, have atleast 1 number and 1 lowercase and 1 uppercase', function () {
        let passwordChecker  = password_is_ok('Password012');
        expect(passwordChecker).toEqual('Password012');
    });

});