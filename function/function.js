// const hight = 20;
// const width = 10;
// const area = hight * width;
// console.log("Area", area)

// const hight1 = 30;
// const width1 = 10;
// const area1 = hight1 * width1;
// console.log("Area", area1)

// function calculatearea(){
//     const width = 20;
//     const hight = 10;
//     const area = hight * width;
//     console.log("area", area);
// }
// calculatearea();

//function

// function calculatearea (hightvalue , widthvalue){
//     const hight = hightvalue;
//     const width = widthvalue;
//     const Area = hight * width;
//     console.log("Area" , Area);
// }
// calculatearea(20 , 10);
// calculatearea(200 , 10);
// calculatearea(20 , 100);
// calculatearea(200 , 150);

//function

// function calculatearea(hightvalue , widthvalue) {
//     const hight = hightvalue;
//     const width = widthvalue;
// const area =hight * width;
// return area;
// }
// const area1 =calculatearea(10 ,20) + calculatearea(20 , 30);
// console.log("area" , area1);

// calculatearea(10 , 20);
// calculatearea(20 , 30);

//no value

// function calculatearea(hightvalue , widthvalue) {
//     const hight = hightvalue;
//     const width = widthvalue;
// const area =hight * width;
// return area;
// }
// const area1 =calculatearea();
// console.log("area" , area1);

//deafault value

// function calculatearea(hightvalue = 1, widthvalue = 1) {
// console.log("hight",hightvalue , "width",widthvalue)
//     const hight = hightvalue;
//     const width = widthvalue;
// const area =hight * width;
// return area;
// }
// const area1 =calculatearea();
// console.log("area" , area1);

// function calculatearea(hightvalue = 1, widthvalue = 1) {
// console.log("hight",hightvalue , "width",widthvalue)
//     const hight = hightvalue;
//     const width = widthvalue;
// const area =hight * width;
// return area;
// }
// const area1 =calculatearea(100 , 200);
// console.log("area" , area1);

//anonymous function

// const login =function(username , passward) {
//     console.log("username",username , "passward",passward);
// };
// login("anshu");

//callback

// function printmassage(massage , callback){
//     console.log(massage);
//     callback();
// }
// function sayGoodbye(){
//     console.log("GoodBye");
// }
// printmassage("hello" , sayGoodbye);

// //using anonymous 

// printmassage("anonymous",function(){
//     console.log("this is from anonymous");
// });

//iife

// ( function callAutomatically(){
//         console.log("This is auto");
//     })();

//using anonymous

    // ( function(){
    //     console.log("This is auto");
    // })();

    //arrowFunction

    // function normalFunction() {}
    // const arrowFunction = () => {};

    // const calculatearea1 = (hight , width) => hight * width;
    // const area1 = calculatearea1 (50 , 10);
    // console.log("Area" , area1)

    // write table

    // const generateTable = (tablevalue , times) => {
    //     for (let i = 1 ; i <= times; i++){
    //         console.log(`${tablevalue} * ${i} = $(i * tablevalue)`);
    //     }
    // };
    // const tablenumber = parseInt(prompt("Enter table number"));
    // generateTable(tablenumber , 10);


    