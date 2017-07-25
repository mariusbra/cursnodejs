
var chai = require(chai);
var passwordValidator = require("../modules/passwordValidator")
describe("passwordValidator", function() {
   describe(".validPassword(password)", function() {
       it("should have minimum 8 char length", function(){
           var wrongpass = '1234567';
           var valid = passwordValidator.validPassword(wrongpass);
        //    chai checkk
           chai.expect(valid).to.be.equal(false);

           var goodPassword = '12345678';
           var valid2 = passwordValidator.validPassword(goodpass);
           chai.expect(valid).to.be.equal(true);
       });
   });
});