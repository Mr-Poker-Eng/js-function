// create a function that will return only the even numbers
// return the sum of even numbers


function evenNumberOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumberOnly(numbers);
// console.log('Even numbers are: ', evens);

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum += number;
        }
    }
    return sum;
}

const numberse = [4, 2, 5, 9, 654, 141, 44, 66]
const add = sumOfEvenNumbers(numberse);
console.log('the sum of all even number is: ', add);