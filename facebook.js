var facebook = /** @class */ (function () {
    function facebook(fbname, fbcity, fbeducction, fbdob, fbmobileno, fbwork, fbemail_id) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.setWork = function (updateWork) {
            return _this.work = updateWork;
        };
        this.name = fbname,
            this.city = fbcity,
            this.education = fbeducction,
            this.dob = fbdob,
            this.mobileno = fbmobileno,
            this.work = fbwork,
            this.email_id = fbemail_id;
    }
    return facebook;
}());
var fbProfile = new facebook('shalini Dubey', 'Hyderabad', 'B.E', 07 - 03 - 1990, 8712710289, 'notyet', 'dubey.shalini@gmail.com');
var userName = fbProfile.getName();
console.log(fbProfile);
console.log(userName);
var workUpadte = fbProfile.setWork("google");
console.log("updated work" + " " + workUpadte + " " + "");
