const customOperation = (num1,num2,operator)=>{
    switch(operator){
        case '+':return(num1+num2);
        case '-':return(num1-num2);
        case '*':return(num1*num2);
        case '/':return(num1/num2);
        case '%':return(num1%num2);
    }
}


console.log(customOperation(5, 10, '+'));
console.log(customOperation(10, 5, '-'));
console.log(customOperation(5, 10, '*'));
console.log(customOperation(10, 5, '/'));
console.log(customOperation(10, 5, '%'));