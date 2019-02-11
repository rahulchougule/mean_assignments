// sort array according to the length of elements
// 1. create array
// 2. use sort method


let products = new Array();

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


 let sortedArray = products.sort((e1, e2):number  => { return e1.length - e2.length});
 console.log("------------ Sort according to length -------------");  
 for(let i of sortedArray){
    console.log(i);
 }

 // sort array in alhpabetical order
 // convert every element in same case and pass it to sort

 let sortedAlphabetically1 = products.sort( (e1, e2) => {
    let a = e1.toLowerCase();
    let b = e2.toLowerCase();
    if(a < b)
    return -1;
    if(a > b)
    return 1;

    return 0;
 });
  
 // another method using inbuilt function "localeCompare"
 let sortedAlphabetically = products.sort( (e1, e2) => e1.localeCompare(e2));


 console.log();
 console.log("------------ Sort according to alphabets -------------");
 for(let j of sortedAlphabetically1){
     console.log(j);
     
 }


 // filterout elements starting with capital letter

 console.log("------------ Filter according to capital letters -------------");
 //let filtered = products.filter( function() {

  // here "k" will get all the details that we are getting in normla for loop
  for(let k of products){
    let firstEle = k.charAt(0); // get the first character
    if(firstEle === firstEle.toUpperCase()){ // check whether it is in uppercase
        console.log(k);  // if yes print it
        
    }
}

// });
