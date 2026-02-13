// Q1
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q2
var UserManager = /** @class */ (function () {
    function UserManager() {
        var _this = this;
        this.users = [];
        this.addUser = function (user) {
            _this.users = __spreadArray(__spreadArray([], _this.users, true), [user], false);
        };
        this.removeUser = function (user) {
            _this.users = __spreadArray(__spreadArray([], _this.users, true), [user], false);
        };
        this.getUserbyId = function (id) {
            return _this.users.find(function (user) { return user.id === id; });
        };
        this.getAllUsers = function () {
            return __spreadArray([], _this.users, true);
        };
        // Q3
        this.getUser = function (name) {
            if (name === void 0) { name = "Guest"; }
            return "Hello, ".concat(name, "! Welcome.");
        };
    }
    return UserManager;
}());
//Q4
function printUserDetails(user) {
    var id = user.id, name = user.name, email = user.email, age = user.age;
    console.log("ID: ".concat(id));
    console.log("Name: ".concat(name));
    console.log("Email: ".concat(email));
    console.log("Age: ".concat(age !== null && age !== void 0 ? age : "Not Provided"));
}
var mg = new UserManager();
mg.addUser({
    id: 1,
    name: "Aditya",
    email: "aditya@gmail.com",
    age: 21
});
var usr = mg.getUserbyId(1);
if (usr) {
    printUserDetails(usr);
}
console.log(mg.getUser());
console.log(mg.getUser("Aditya"));
console.log(mg.getAllUsers());
