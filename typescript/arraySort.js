// sort array according to the length of elements
// 1. create array
// 2. use sort method
var products = new Array();
products.push("laptop");
products.push("desktop old");
products.push("Modem");
products.push("Harddisk");
// by default sort in alphabetical order
/*
let sortedArray = products.sort();
for(let i of sortedArray){
    console.log(i);
}
*/
// sort array according to length of element. sort will iterate through all elements automatically.
// here we have to pass length (number) of each element to sort. we are passing the required parameters
// by performing substraction of lengths of every element. elements will be iterated by sort, automatically.
var sortedArray = products.sort(function (e1, e2) { return e1.length - e2.length; });
console.log("------------ According to length -------------");
for (var _i = 0, sortedArray_1 = sortedArray; _i < sortedArray_1.length; _i++) {
    var i = sortedArray_1[_i];
    console.log(i);
}
// sort array in alhpabetical order
// convert every element in same case and pass it to sort
var sortedAlphabetically1 = products.sort(function (e1, e2) {
    var a = e1.toLowerCase();
    var b = e2.toLowerCase();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
});
var sortedAlphabetically = products.sort(function (e1, e2) { return e1.localeCompare(e2); });
console.log();
console.log("------------ According to alphabets -------------");
for (var _a = 0, sortedAlphabetically1_1 = sortedAlphabetically1; _a < sortedAlphabetically1_1.length; _a++) {
    var j = sortedAlphabetically1_1[_a];
    console.log(j);
}
// filterout elements starting with capital letter
console.log("------------ Capital filter  -------------");
//let filtered = products.filter( function() {
for (var _b = 0, products_1 = products; _b < products_1.length; _b++) {
    var k = products_1[_b];
    var firstEle = k.charAt(0);
    if (firstEle === firstEle.toUpperCase()) {
        console.log(k);
    }
}
// });
