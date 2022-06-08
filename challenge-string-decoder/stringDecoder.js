

function decoder(code){
    let result = ''                         //Where we store the letter we want to save

    for(let i=0; i<code.length; i++){
        if (!isNaN(+code[i])){              //if code is a number
            i += +code[i]                   // add the number to I
        } else {
            result += code[i]               //add the letter to result
        }

    }
    return result
}

console.log(decoder('0h2xce5ngbrdy'))