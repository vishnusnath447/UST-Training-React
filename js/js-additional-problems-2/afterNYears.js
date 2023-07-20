const afterNYears = (obj,year)=>{
    for(let i=0;i<obj.length;i++){
        obj[i].age+=year;
    }
    return obj;
}


console.log(afterNYears([
    {
        name:"Joel",
        age : 32
    },
    {
        name:"Fred",
        age: 44
    },
    {
        name:"Reginald",
        age: 65
    },
    {
        name:"Susan",
        age: 33
    },
    {
        name:"Julian",
        age: 13
    }
], 5));