var assert = require('assert');
var MembershipApplication  = require('../../subscriptions/models/membership_application');

describe('Applying for mission', function () {

    var validAppp;
    before(function () {
        //
        validAppp = new MembershipApplication({
            first: 'Test',
            last: 'Test',
            email: 'test@test.com',
            age: 30,
            height: 66,
            weight: 180
        });
    });

    describe('Application valid if...', function () {
        it('all validators successful', function () {
            assert(validAppp.isValid(), 'Not valid');
        });
        it('email is 4 or more chars and contains and @',function () {
            assert(validAppp.emailIsValid(), 'Not valid');
        });
        it('height is between 60 and 75 inches', function () {
            assert(validAppp.heightIsValid(), 'Not valid');
        });
        it('age is between 15 and 100', function () {
            assert(validAppp.ageIsValid(), 'Not valid');
        });
        it('weight is between 100 and 300', function () {
            assert(validAppp.weightIsValid(), 'Not valid');
        });
        it('first and last name provide', function () {
            assert(validAppp.nameIsValid(), 'Not valid');
        });
    })
})