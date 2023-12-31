const getSumOfPeopleBudget= (arr)=>{
    return arr.map(element=>element.budget).reduce((sum,element)=>sum+element);
}

console.log(getSumOfPeopleBudget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));
console.log(getSumOfPeopleBudget([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]));