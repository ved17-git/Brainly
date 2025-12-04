

export const randomURL=()=>{

let baseURL=""
let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ"

for(let i=1; i<=5; i++){
    let random=Math.floor(Math.random() * 48)
    let c=chars.charAt(random)
    baseURL+= random + c;
}

return baseURL

}

