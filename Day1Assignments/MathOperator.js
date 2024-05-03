
export class SumFunction {
    output;
    constructor(a,b) {
        this.output = (a+b);
        return this.output;
    }
}

export class SubFunction {
    output;
    constructor(a,b) {
        this.output = (a-b);
        return this.output;
    }
}

export class MultFunction {
    output;
    constructor(a,b) {
        this.output = (a*b);
        return this.output;
    }
}

export class DivFunction {
    output;
    constructor(a,b) {
        if(b!=0){
            this.output = (a/b);
        }else{
            this.output = 0;
        }
        
        return this.output;
    }
}

class SquareFunction {
    input1;
    output;
    constructor(a) {
        this.output = a*a;
        return this.output;
    }

    cubeFunction(a){
        this.output = a*a*a;
        return this.output;
    }
}

export default SquareFunction;