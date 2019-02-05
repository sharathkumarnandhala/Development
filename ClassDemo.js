var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product() {
        this.prodcost = 10;
        this.prdname = "redmi4";
        this.prodid = 1155669;
    }
    Product.prototype.getDetails = function () {
        console.log("product details are");
        console.log("prod cost " + this.prodcost);
        console.log("prod name" + this.prdname);
        console.log("prod id" + this.prodid);
    };
    return Product;
}());
//object creation
var prodobject = new Product();
prodobject.getDetails();
var Tempprod = /** @class */ (function (_super) {
    __extends(Tempprod, _super);
    function Tempprod() {
        var _this = _super.call(this) || this;
        _this.duration = 6;
        return _this;
    }
    Tempprod.prototype.getDetails = function () {
        console.log("product details are");
        console.log("prod cost " + this.prodcost);
        console.log("prod name" + this.prdname);
        console.log("prod id" + this.prodid);
    };
    return Tempprod;
}(Product));
var tempprodobject = new Tempprod();
tempprodobject.getDetails();
