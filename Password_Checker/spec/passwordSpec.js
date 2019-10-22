
describe('is  password valid', () => {
    it('should see if password contains only lowercase', () => {
        let validPassword  = password_is_valid('PASSWORD');
        expect(validPassword ).toBe(false);
    });

    it('should see if password contains uppercase', () => {
        let validPassword  = password_is_valid('password');
        expect(validPassword ).toBe(false);
    });

    it('should see if password contains numbers', () => {
        let validPassword = password_is_valid('Password123');
        expect(validPassword).toBeTruthy;
    });

    it('should see if password is longer than 8 characters', () => {
        let validPassword  = password_is_valid('Password123');
        expect(validPassword ).toBeTruthy;
    });

    it('should see if password contains at least 1 lowercase, 1 uppercase, 1 number and has to be longer than 8 characters', () => {
        let validPassword  = password_is_valid('Password012');
        expect(validPassword ).toBeTruthy;
        ;
    });
    it('should throw an error if it is not valid', () => {
        let validPassword = password_is_valid('password');
        expect( () => {password_is_valid('password');}).toThrowError; 
        
    });
});

describe('is password ok', () => {
    it('should not be void, must have more than 8 characters, have atleast 1 number and 1 lowercase and 1 uppercase', () => {
        let passwordChecker  = password_is_ok('Password012');
        expect(passwordChecker).toBeTruthy;
    });

});
