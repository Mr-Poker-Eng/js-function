//task 1

// function multiply(num1, num2, num3, num4){
//     const result = num1 * num2 * num3 * num4;
//     return result;
// }

// const result = multiply(5, 6, 2, 6);
// console.log(result);


//task 2

// function check(number){
//     let result;
//     if(number % 2 !== 0){
//         result = number * 2;
//     }
//     else{
//         result = number / 2;
//     }
//     return result;
// }

// const result = check(6);
// console.log(result);


//task 3

// function make_avg(numbers){
//     let sum = 0;
//     let avg;
//     for(let numbs of numbers){
//     sum += numbs;
//     }
//     avg = sum / 7;
//     return avg;
// }

// const numbers = [5, 6, 7, 5, 9, 10, 21];
// let avg = make_avg(numbers);
// console.log('the average of the number is: ', avg);



//task 4

// function count_zero(str){
//     console.log(str);
//     let count = 0;
//     for(const sep of str){
//         if(sep === '0'){
//             count = count + 1;
//         }
//     }
//     return count;
// }

// const countZero = count_zero('00101011100110011111000');
// console.log('Number of zero is: ', countZero);


// task 5

function odd_even(number){
    if(number % 2 === 0){
        console.log('Even');
    }
    else{
        console.log('Odd');
    }
}

const number = odd_even(50);
// console.log(number);
