
let baseURL="localhost:8000"
let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ"

console.log( Math.floor(Math.random() * 10) );


for(let i=1; i<=20; i++){
    let random=Math.floor(Math.random() * 48)
    let c=chars.charAt(random)
    baseURL+= random + c;
}
