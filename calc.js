export const somar = function(... numeros){
    let s=0
    for(let n of numeros){
        s=s+n;
    }
return s;
}

export const subtrair = function(... numeros){
    let s=0
    for(let n of numeros){
        s=s-n;
    }


}

export const multiplicar = function(... numeros){
    let s=0
    for(let n of numeros){
        s=s*n;
    }

}

export default {

    somar,
    subtrair,
    multiplicar,
}


