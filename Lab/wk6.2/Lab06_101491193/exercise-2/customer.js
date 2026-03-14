var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = "";
        this.lastName = "";
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();
