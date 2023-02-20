function addNumber(x, y, z){
    return x+y+z;
}

let numbers = [1, 2, 3];
// console.log(addNumber(numbers[0], numbers[1], numbers[2]));

// using spread operator we can do this more easily 

// console.log(addNumber(...numbers));


// rest parameter 
// function addNumber(x, y, ...z){
//     return x+ y+ z;
// }


// let numbers1 = [5,...numbers,8];
// console.log(numbers1);

// rest parameter
// pack kore ekta array er modde rekhe dei 


// spread operator
// unpack kore 


// concatinating

let numbers1 = [1, 2, 3];
let numbers2 = [4,5,6];

// old method 
// let numbers12 = numbers1.concat(numbers2);
// console.log(numbers12);
let numbers12 = [...numbers1, ...numbers2];
// console.log(numbers12);


// spread operator in objects 
let p1 = {
    name : "Anisul Islam",
    age : 30
}
let p2 = {
    nationality : "Bangladesh",
    occupation : "teacher"
}

let p = {...p1, ...p2};
console.log(p);