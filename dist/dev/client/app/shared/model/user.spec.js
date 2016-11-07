"use strict";
describe('User', function () {
    it('has username', function () {
        var user = {
            firstName: 'Akshay',
            lastName: '',
            middleName: '',
            email: '',
            phone: 11,
            empId: '',
            gender: '',
            password: ''
        };
        expect(user.firstName).toEqual('Akshay');
    });
});

//# sourceMappingURL=user.spec.js.map
