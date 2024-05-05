import SquareFunction, {sumFunction, multFunction} from "./MathOperator.js"

function getSquare (a){
    console.log(`Invoking square function for ${a}`);
    let outValue = SquareFunction(a);
    return outValue;
}

export function getSum (a,b){
    console.log(`Invoking addition function for ${a} and ${b}`);
    let outValue = sumFunction(a,b);
    return outValue;
}

export function getMult (a,b){
    console.log(`Invoking multiplication function for ${a} and ${b}`);
    let outValue = multFunction(a,b);
    return outValue;
}

export default getSquare;