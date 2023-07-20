/**
 * Task: Write a function that takes and return its as as a string in
 * us English currency format
 */

let currency = (number) => {
    return '$'+ Intl.NumberFormat('en-US').format(number);
}

let convert = function convertToCurrency(n){
    result=[];
    n=n.toString();
    n=n.split('.');
    while(n[0].length != 0){
        result.unshift(n[0].slice(-3));
        n[0]=n[0].slice(0,-3);
    }
    if(n[1]==undefined){
        n[1]='00';
    }
    return '$'+result.join(',')+'.'+n[1];
}

console.log(currency(100000.45));
console.log(convert(1234567.89));