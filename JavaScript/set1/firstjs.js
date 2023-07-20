let name ="Vishnu";
console.log(name + " is a "+ typeof name);

n=10;
console.log(n + " is a " +typeof n);

let genre = ["Action", "Comedy", "Drama", "Romance"];
genre.forEach(s => console.log(s));

genre.push("Horror")
console.log(genre);
console.log(genre.pop());

genre.unshift("Horror")
console.log(genre);
console.log(genre.shift());

console.log(genre.map(s=>s.toUpperCase()));


function myFunction(v){
    return v.toUpperCase();
}

console.log(myFunction("Vishnu"));

const x = (v)=>v.toUpperCase();
console.log(x("Vishnu"))