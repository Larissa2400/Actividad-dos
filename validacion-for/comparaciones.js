//COMPARACIONES

//IGUALDAD
if (5==5){
    console.log("5 es igual a 5")
}

if (5===5){
    console.log("5 es igual a 5")
}

let a = 5;
console.log (typeof a)
// let b = 5; 
let b = "5"; 
console.log (typeof b)

if (a== b){
    console.log("a es igual que b DEBIL");
}
if (a === b){
    console.log("a es igual que b FUERTE");
}

//DESIGUALDADES
let c = 4;
let d = "4";

if (c != d){
    console.log ("c es igual que d DEBIL");
}
 if (c !== d){
    console.log ("c es igual que d FUERTE");
}

//MAYOR QUE Y MENOR QUE

let max = 10;
let min =5;

if (max > min){
    console.log ("max es mayor que min")
}

if (max >= min){
    console.log ("max es mayor o igual que min")
}

if (min < max){
    console.log ("min es menor que max")
}

if (min <= max){
    console.log ("min es menor que max")
}