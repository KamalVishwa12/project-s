// let a =2;
// let b =5;

// arithmatic operators

// console.log("a + b = ",a + b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b);
// console.log("++a = ",++a);

// comparision operators

// let a = 10;
// let b = 10;
// console.log("a == b= ",a==b);

// let c = 4;
// let d = 4;
// console.log("c == d = ",c == d);
// console.log("c === d= ",c === d);
// console.log("c != d= ",c != d);
// console.log("c > d = ",c > d);
// console.log("c < d = ",c < d);
// console.log("c >= d= ",c >= d);

// logical operators

// let e = 5;
// let f = 7;
// let g = 9;
// console.log(e < f && g > e);
// console.log(e < f && g < e);
// console.log(e > f || g < e);

// conditional

// const score = 99;
// if (score > 90) {
//     console.log("you are a Topper")
// }
// else {
//     console.log("you are a average student")
// }

// const score = 45;
// if (score >90){
//     console.log("you are a topper");
// }
// else if (score >35) {
//     console.log("you are a average student");
// }
// else {
//     console.log("you are fail");
// }

//switch

// switch(3) {
//     case 1:
//         console.log("this is one");
//         break;
//         case 2:
//             console.log("this is two");
//             break;
//             default:
//                 console.log("i am defaoult case");
// }

// const num1 =5;
// const num2 =9;
// const operation = " - ";
// let result;

// switch (operation){
//     case " + ":
//         result = num1 + num2;
//         break;
//         case " - ":
//         result = num1 - num2;
//         break;
//         case " * ":
//         result = num1 * num2;
//         break;
//         default:
//             result = "invalid operators";
//             break;
// }
// console.log(result);

const score = 24;
switch (true) {
    case score > 90:
        console.log("you are topper");
        break;
 case score > 35:
            console.log("you are average");
            break;
 default:
                console.log("you are not passed");
}