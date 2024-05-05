import SquareFunction,{SumFunction, MultFunction, DivFunction} from "./MathOperatorClass.js"

class CalculateInh extends SquareFunction {
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
    
    MultFunction(sumVal1, sumVal2){
        let val = (sumVal1*sumVal2);
        return val;
    }
    
    displayDiv(sumVal1, sumVal2){
        let val = new DivFunction(sumVal1,sumVal2);
        console.log('Division of value are ');
        return val.output;
    }
}

export default CalculateInh;