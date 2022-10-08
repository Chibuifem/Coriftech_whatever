// function studscore(score){
//     if (score >=50){
//         return "you passed"
//     }
//     else{
//         return "failed"
//     }
// }

// let test1 = 5;
// let test2 = 38;
// let exam = 40;
// let studscore=(test1 + test2)/2 + (exam/100)*70;

//................................................................................
// function studscore(score){
//     console.log(score);
//     if (score >=50){
//         return "you passed" + score;
//     }
//     else{
//         return "failed" + score;
//     }
// }

// // function to return final student score
// function finalscore (test1, test2, exam){
// let score = (test1 +test2)/2 + (exam/100)*70;
// return score;
// }

// let uzo = [5, 30, 79];
// let treasure = [1, 40, 51];
// let solomon = [9, 49, 20];

// let uzofinalscore = finalscore(uzo[0], uzo[1], uzo[2]);
// console.log(studstatus(uzofinalscore));

// let treasurefinalscore = finalscore(treasure[0], treasure[1], treasure[2]);
// console.log(studstatus(treasurefinalscore));

// let solomonfinalscore = finalscore(solomon[0], solomon[1], solomon[2]);
// console.log(studstatus(solomonfinalscore));



     //ASSIGNMENT

//function to return the square of a number
function squ(num){
    return num * num;
}

console.log(squ(2));
console.log(squ(3));

//function to find the area of a rectangle
function area (length,breadth){
    let area = length*breadth;
    return area;
}
console.log(area(5,3));

//function to find the perimeter of a circle
function perimeter (length,breadth){
    let perimeter = 2*(length + breadth);
    return perimeter;
}
console.log(perimeter(5,3));


//function that accepts a number as a paerameter if the no is divisible by 2
// function a (num){
//     let a = 5;
//     typeof a
//     let value = num/2;
// if(num/2){
//     console.log("it is divisible by 2")
// }
// else if ((value * 2 )!==num) {
//     console.log("it is not divisible by 2")
// }
// else{
//     console.log("it is not a number")
// }
// return num;
// }
// console.log(a(2))



// console.log(a(5))
function divisible(num){
    if(typeof num === typeof 3){
        if((num%2) === 0){
            console.log("Divisible by 2");
        }else {
            console.log("Not divisible by 2");
        }
    }else {
        console.log("Not a number");
    }
}

divisible(2)

