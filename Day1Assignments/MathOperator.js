
export function sumFunction(a,b) {
    let output = (a+b);
    return output;
}

export function subFunction(a,b) {
    let output = (a-b);
    return output;
}

export function multFunction(a,b) {
    let output = (a*b);
    return output;
}

export function divFunction(a,b) {
    let output;
    if(b!=0){
        output = (a/b);
    }else{
        output = 0;
    }
    
    return output;
}

function SquareFunction(a) {
    let output = a*a;
    return output;
}

export default SquareFunction;