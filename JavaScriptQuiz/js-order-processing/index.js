
let orderArray = '[{"pId": 1200,"unitCost": 50,"Quantity": 2},{"pId": 1232,"unitCost": 30,"Quantity": 4}]'

function finalPrice(orderArray){
    // code here
    return JSON.parse(orderArray).reduce((element1,element2)=>{
        return(element1.unitCost*element1.Quantity)+(element2.unitCost*element2.Quantity);
    });
    
}

console.log(finalPrice(orderArray))
