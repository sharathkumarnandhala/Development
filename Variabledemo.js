var i = 10;
console.log("value of i " + i);
var z = 1000;
console.log("value of const z is" + z);
var j = 100;
console.log("value of j is" + j);
if (true) {
    console.log("with in if..let value" + j);
    display();
}
function display() {
    i = i + 10;
    j = j + 100;
    //z=z+10;
    console.log("value of i " + i);
    console.log("value of j is" + j);
}
//array
var colors = ["red", "blue", "green", "yellow", "black", "white"];
console.log("array values are:" + colors[2]);
