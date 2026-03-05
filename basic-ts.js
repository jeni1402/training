// variables
var fname = "jeni";
var age = 22;
var place = "Tvl";
console.log(fname, age, place);
// array
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(i);
}
// objects
var names = {
    name_1: "jeni",
    name_2: "moni",
    name_3: "mani"
};
console.log(names);
// arrow
var sum = function (x, y) {
    var z = x + y;
    console.log(z);
};
sum(2, 3);
var Student = {
    name: "jeni",
    age: 22,
    leave: true,
    mark: 455
};
console.log(Student);
function sample() {
    console.log("hiiii");
}
sample();
function nameList(name, name2) {
    return name + name2;
}
console.log(nameList(5, 5));
