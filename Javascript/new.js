// console.log("Hello there");

// var username = "This is my first javascript class"
// console.log(username);

// const num = 390;
// console.log(num);

// let surname = "Daniel Damilare"
// console.log(surname);


// var sum = 4 + 2;
// console.log("The sum is",sum);

// var minus = 4 - 2;
// console.log("The subtraction is",minus);

//  var multi = 4 * 2;
//  console.log("The multiplication is",multi);

//  var divide = 4/2;
//  console.log("The division is",divide);

//  var mod = 4 % 2;
//  console.log("The modulo is",mod);

// var num1 = 2;
// var num2 = 3;

// console.log(num1 ++);
// console.log(num2 --)

// const first = "dan" , sec = "Dan"
// console.log(first == sec); //comparing if the two values are equal


// var f = 10;
// var s = "10";
// console.log(f === s); //comparing if the two values are equal and have the same datatype


//ASSIGNMENT

// //1.
// let a = 10;
// let b = 10;
// console.log(a == b);
// console.log(a !== b);

// //2.
// let c = 10;
// let d = 10;
// if((c>9) && (d=10)){
//     console.log("valid");
// }
// else{
//     console.log("invalid");
// }

// //3.
// let vowels = ["a","e","i","o","u"]
//     if (vowels === a) {
//         console.log("vowel sound")
//     }
//     else if (vowels === e) {
//         console.log("vowel sound")
//     }
//     else{
//         console.log("consonant sound");
//     }
// console.log(vowels(e));


//CLASSWORK

//1
console.log("Hello world");

//2
let a = 1;
let b = 2;
let c = a+b;
console.log("the sum of the two number is" +" " +c);

//3
function value(num) {
    if (num>0) {
        console.log("postive number");
    }
    if (num==0) {
        console.log("zero");
    }
    else {
        console.log("negative number");
    }
    
}
value(-6)

//4
function calc(num){
    if(typeof num === typeof 3){
        if((num%2) === 0){
            console.log("even number");
        }else {
            console.log("odd number");
        }
    }else {
        console.log("Not a number");
    }
}
  calc(2)

  //5
  
 let num1 = 5;
 let num2 = 6;
 let num3 = 7;
      if ((num1 > num2)&&(num1 > num3)) {
          console.log("num1 is the greatest");
      }
      if ((num2>num1) && (num2>num3)) {
          console.log("num2 is the greatest");
      }
      if ((num3>num1) && (num3>num2)) {
        console.log("num3 is the greatest");
  }

  //6
  let number1 = parseFloat(prompt("enter first number"));
  let number2= parseFloat(prompt("enter second number"));
 let result;
let operator = prompt("+, -, *, /")
    switch (operator) {
        case "+":
           result = number1 + number2;
            break;
            case "-":
                result = number1 - number2;
                break;
                case "*":
                    result = number1 * number2;
                    break;
                    case "/":
                        result = number1 / number2;
                        break;
    
        default:
            console.log("invalid input");
            break;
    }

