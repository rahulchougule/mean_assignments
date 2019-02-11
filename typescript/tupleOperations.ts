let mytuple = [{"prodId":101, "manufacturer":"Sony", "prodName":"sony super", "price":30000},
                {"prodId":102, "manufacturer":"Sony", "prodName":"sony super", "price":40000},
                {"prodId":103, "manufacturer":"Dell", "prodName":"dell magna", "price":25500},
                {"prodId":105, "manufacturer":"HP", "prodName":"hp hp001", "price":28000} ];

// console.log(mytuple[1]); it will print 2nd object

// sort tuple according to product name
let sortProdName = mytuple.sort( (obj1, obj2) => {

    if(obj1.prodName > obj2.prodName){ return 1}
    if(obj1.prodName < obj2.prodName){return -1}

    return 0

} );

// for(let p of sortProdName){
//     console.log(p);
    
// }

let searchByProdName = mytuple.filter( (obj1) => {

     let pronm = obj1.prodName;

    if(pronm == "sony super"){
        //console.log(pronm);
        return pronm;
    }

});


for(let pn of searchByProdName){
    console.log(pn);
    
}