//without loops

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")

//using loops

// for (let i = 1; i <=6; i++){
//     console.log(i)
// }

//while loops

// let i =1;
// while (i < 10){
//    console.log("print i",i);
//     i++;
// }

//do while loops

//for loop

// for(let i=1; i < 10; i++) {
//     console.log("Print i", i);
// }

// for(let i=1; i < 10; i +=2) {
//     console.log("Print i", i);
// }

// for(let i=1; i < 100; i ++) {
//     if (i % 5 == 0){
//     console.log("Print i", i);}
// }

// for(let i=1; i < 100; i ++) {
//     if (i % 5 == 0) {
//     console.log("Print i", i);}
// if(i > 50){
//     break;
// }
// }

    // for (i = 1;i < 100;i ++){
    //     if(i % 5 == 0){
    //         if(i == 20){
    //             continue;}
    //     console.log("Print i",i);}
    //     if (i > 60){
    //         break;
    //     }
    // }

    //write even no. upto 60
    // const uptoNumber = 60
    // for(let i = 0; i <=uptoNumber; i++){
    //     if (i % 2 == 0){
    //         console.log("even number" , i)
    //     }
    
    // }

    //factorial of 4
    const inputNumber = 4;
    let result = 1;
    for(let i = 1; i <= inputNumber; i++){
        result = result * i;
    }
        console.log(`Factorial of ${inputNumber} = ${result}`);
   
    const table = 19;
    for (let i = 1; i <=10; i++ ){
            console.log('19 x 19 = ${table * i} ')
        }
    