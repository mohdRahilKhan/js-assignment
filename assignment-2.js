// !! FILE ADDED IN INDEX.HTML (COMMENTED)

// ####### 1. Data Structures: Arrays ######
function sumArray(numbers){
    let sum = 0;

    // foreach to iterate over array
    numbers.forEach(number => {
        sum += number;
    });

    return sum;
}
const arr_of_num = [2,5,7,8,5,3];
// calling function which retrun sum of array elements
console.log(sumArray(arr_of_num));


// ####### 2. Data Structures: Objects ######
function printPersonDetails(person_obj){
    console.log('name: ',person_obj['name']);
    console.log('age: ',person_obj['age']);
    console.log('email: ',person_obj['email']);
}
// object => key and value pair
const person = {name:'Mohd Rahil Khan', age:23, email:'khanmohdrahil44@gmail.com'};
// calling function and passing person object 
printPersonDetails(person);

// ####### 3. Functions Are Just Variables ######
// assigning arrow function to greeting variable
let greeting = (name) => console.log(`Hey! Welcome ${name}`);
greeting('Mohd Rahil Khan');

// ###### 4. More on Objects and The "this" Keyword #####
const car = {
    brand : 'Tata',
    model : 'Honda', // this keyword refers to the object car
    start : function (){
        console.log(`The Car of model ${this.model} and ${this.brand} brand being started!`)
    }
    }
// calling method of car object
car.start();

// ###### 5. The old "var" #####
function printNumbers(){
    // var has no block scope
    for(var count=1;count<=5;count++){
        console.log(count);
    }
    // so here accessible (if declare with let or const than not)
    console.log(count);
}
// calling function
printNumbers();

// ###### 6. Function binding #####
const user = {
    name : 'Mohd Rahil Khan',
    sayName : function(){
        console.log(this.name);
    }
}
// binding the function sayName of user object to boundSayName
let boundSayName = user.sayName.bind(user)
boundSayName();

// ###### 7. Arrow functions, the basics #####
// no need for parenthesis and curly braces if passing single parameter and single statement inside function 
let double = num => num*num; // single statement by default return
console.log(double(5));



