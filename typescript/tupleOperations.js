var mytuple = [{ "prodId": 101, "manufacturer": "Sony", "prodName": "sony super", "price": 30000 },
    { "prodId": 102, "manufacturer": "Sony", "prodName": "sony super", "price": 40000 },
    { "prodId": 103, "manufacturer": "Dell", "prodName": "dell magna", "price": 25500 },
    { "prodId": 105, "manufacturer": "HP", "prodName": "hp hp001", "price": 28000 }];
// console.log(mytuple[1]); it will print 2nd object
// sort tuple according to product name
var sortProdName = mytuple.sort(function (obj1, obj2) {
    if (obj1.prodName > obj2.prodName) {
        return 1;
    }
    if (obj1.prodName < obj2.prodName) {
        return -1;
    }
    return 0;
});
// for(let p of sortProdName){
//     console.log(p);
// }
var searchByProdName = mytuple.filter(function (obj1) {
    var pronm = obj1.prodName;
    if (pronm == "sony super") {
        //console.log(pronm);
        return pronm;
    }
});
for (var _i = 0, searchByProdName_1 = searchByProdName; _i < searchByProdName_1.length; _i++) {
    var pn = searchByProdName_1[_i];
    console.log(pn);
}
