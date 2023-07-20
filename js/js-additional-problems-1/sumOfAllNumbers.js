const sumOfAllNumbers = (arr)=>{
    return arr.reduce((sum,element)=>sum+element);
};

console.log(sumOfAllNumbers([1, 2, 3, 4, 5]));
console.log(sumOfAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));