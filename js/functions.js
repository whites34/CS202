// function declaration

/* function functionName(parameter){
    do something
} */

//console.log('Hello, World!');

// function greet(){
//     console.log('Hello There!');
// }

// //call function

// greet();

// //function expression

// const speak = function greet(){
//     console.log('good morning');
// }

// speak();
// speak();
// speak();


//arguments & parameters

// const speak = function greet(name){
//     console.log('good morning');
// }

// speak();

// const speak = function greet(name = 'Sarah', time = 'afternoon'){
//     //console.log(`good morning ${name}`);
//     console.log(`good ${time} ${name}`);
// }
//speak('Sarah');
//speak('Sarah', 'morning');
//speak();


// return statements

// const speak = function(name, time){
//     console.log(`good morning ${name}`);
// }

// speak('Sarah');

// console.log(speak());

const calcArea = function(radius){
    // let area = 3.14 * radius**2;
    // return area;
    // have to return the area so console.log will work

    return 3.14 * radius**2;
}

const area = calcArea(5);

console.log(area);