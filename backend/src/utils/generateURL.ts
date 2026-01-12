

export const randomURL=()=>{

let baseURL=""
let chars="abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQURSTUVWXYZ"

for(let i=1; i<=5; i++){
    let random=Math.floor(Math.random() * 48)
    let c=chars.charAt(random)
    baseURL=baseURL + c;
}

return baseURL

}

