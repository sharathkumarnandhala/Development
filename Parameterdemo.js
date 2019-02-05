function display(name) {
    if (name === void 0) { name = "Accenture"; }
    console.log("welcome" + name);
}
display();
display("sharath");
function area(height, width) {
    var width = 10;
    console.log("area" + (0.5 * height * width));
}
area(10, 20);
function addnumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of numbers", sum);
}
addnumber(1, 2, 3);
