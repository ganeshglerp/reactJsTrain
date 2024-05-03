import SquareFunction,{SumFunction, MultFunction, DivFunction} from "./MathOperator.js"

class Calculate extends SquareFunction {
    constructor(inputValue) {
        super();
    }

    displayCube(sqrVal){
        let val = super.cubeFunction(sqrVal);
        console.log('Cube Value is '+val);
        return val.output;
    }

    displaySquare(sqrVal){
        let val = new SquareFunction(sqrVal);
        console.log('Square Value is ');
        return val.output;
    }
    
    displaySum(sumVal1, sumVal2){
        let val = new SumFunction(sumVal1,sumVal2);
        console.log('Summation of value are ');
        return val.output;
    }
    
    displayMult(sumVal1, sumVal2){
        let val = new MultFunction(sumVal1,sumVal2);
        console.log('Multiplication of value are ');
        return val.output;
    }
    
    displayDiv(sumVal1, sumVal2){
        let val = new DivFunction(sumVal1,sumVal2);
        console.log('Division of value are ');
        return val.output;
    }
}

export default Calculate;