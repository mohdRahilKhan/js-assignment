// !! FILE ADDED IN INDEX.HTML (COMMENTED)

// string datatype 
let var1 = 'hello';
let var2 = 2;
let var3 = false;
let var4 = ['hello','hey','hi'];

let num1 = 1;
while(num1 <= 10){ // when the condition is false while loop is terminated
    console.log(num1);
    num1++;
}
// if we print num1 after while loop end than we get num1 = 11

let sum = 0;
// for(initialization,condition,increment or decrement)  // initialization works only first time
for(let i=1;i<=100;i++){ // if condition conditon is false than loop terminated
    sum += i; // assignment operator += doing sum = sum + i
}
console.log(sum);

let num2 = +prompt('Enter a number'); // will take input of user
switch(num2){
// based on num2 value it will hit the desired case if not match than the default ones
    case 1: // its doing-> num2 === 1
        console.log('Its Monday');
        break; // adding this to prevent hitting the next case
    case 2:
        console.log('Its Tuesday');
        break;
    case 3:
        console.log('Its Wednesday');
        break;
    case 4:
        console.log('Its Thursday');
        break;
    case 5:
        console.log('Its Friday');
        break;
    case 6:
        console.log('Its Saturday');
        break;
    case 7:
        console.log('Its Sunday');
        break;
    default:
        console.log('not a day');
}

function calculateArea(l,w){
    return l*w;
}

console.log(calculateArea(2,6));
console.log(calculateArea(9,4));
console.log(calculateArea(3,9));

let num3 = +prompt('Enter a number');
if(num3 > 0) console.log('number is positive'); // if single statement is used than no need for curly braces
else if(num3 < 0) console.log('number is negative');
else console.log('number is zero');

for(let i=1;i<=20;i++){
    if(i%2===0) console.log(i);
}

let num4 = +prompt('Enter a number');
let result = 1;
for(let i=1;i<=num4;i++){
    result *= i;
}
console.log(result);