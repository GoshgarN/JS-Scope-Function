"use strict"

// Task1

// function checkDivideNum(number){
//     if(number%3==0 && number%7==0){
//         console.log("Digits are divided to 3 and 7")
//     }
//     else{
//         console.log("Digits are not divided to 3 and 7")
//     }
// }
// checkDivideNum(21);

// Task2

// function calculateFactorial(number){
//     let result=1;
//     if(number>=0){
//         for(let i =1; i<= number; i++){
//             result*=i;
//         }

//         console.log(result)
//     }
//     else{
//         alert("Please add correct number")
//     }

//     calculateFactorial(4);
// }

// Task4

// let email= "cavid@code.edu.az";
// let password = 12345;

// function checkfulldata(email, password){
//     if(email == "cavid@code.edu.az" && password == 12345){
//         alert("Giris olundu")
//     }else{
//         alert("Mail ve yaxud password sehvdir")
//     }
// }

// checkfulldata(email,password);

// Task5

// let arr = [1,2,3,4,5,6,7,8,9,10];

// function calculateSumOfOddNum(arr){
//     let sum = 0;
//     for(let i=0; i< arr.lenght; i++){
//         if(arr[i] %2 == 1){
//             sum+=arr[i];
//         }
        
//     }
//     console.log(sum)
// }

// calculateSumOfOddNum(arr);

// Task6

// let arr = [1,2,3,4,5,6,7,8,9,10];

// function CountOfEvenNums(arr){
//     let count =o;
//     for(let i=0; i<= arr.length; i++){
//         if(arr[i]%2==0){
//             count++;
//         }
//     }
//     console.log(count);
// }
// CountOfEvenNums(arr);

Task3

let arr = [1,2,3,4];

function calculateEvenPowSum(arr){
    let result=0;
    for(let i=0; i<= arr.length; i++){
        if(arr[i]%2==0){
            result+=Math.pow(arr[i], 2);
        }
    }
    console.log(result);
}
calculateEvenPowSum(arr);




