/* --- password valid --- */

describe('is  password valid', function () {
    it('should see if password contains only lowercase', function () {
        let lookat = password_is_valid('PASSWORD');
        expect(lookat).toEqual(false);
    });

    it('should see if password contains uppercase', function () {
        let lookat = password_is_valid('password');
        expect(lookat).toEqual(false);
    });

    it('should see if password contains numbers', function () {
        let lookat = password_is_valid('Password12');
        expect(lookat).toEqual(false);
    });

    it('should see if password is longer than 8 characters', function () {
        let lookat = password_is_valid('Password012');
        expect(lookat).toEqual(false);
    })

    it('should see if password contains at least 1 lowercase, 1 uppercase, 1 number and has to be longer than 8 characters', function () {
        let lookat = password_is_valid('Password012');
        expect(lookat).toEqual(false);
    })
});

/* --- password is ok --- */

describe('is password ok', function () {
    it('should not be void, must have more than 8 characters, have atleast 1 number and 1 lowercase and 1 uppercase', function () {
        let lookat = password_is_ok('Password012');
        expect(lookat).toEqual('Password012')
    });

});