// Spread Operator with Arrays
// Task 1 : Create a new array `combinedArray` that merges `array1` and `array2` using the spread operator

let html = ["Attribute", "Events", "Canves", "URL Encoding"];
let javascript = ["Variables", "Operators", "Functions", "Loops", "Arrays"]

content = [...html,...javascript]
console.log(`Content variable is combined with content of 2 arrays, html and javascript`);
console.log(content);
console.log(`Content variable is combined with content of 2 arrays and course title before adding array's`);
content = ["HTML",...html,"JS",...javascript, "CSS"]
console.log(content);


// Spread Operator with Objects
// Task 2 : Create a new object `combinedObject` that merges `object1` and `object2` using the spread
// operator. If there are overlapping properties, ensure that the properties from `object2` overwrite
// those from `object1`
const object1 = {order_id:"PO/01MAY2024/123",customer:"Vasu",ordered_date:""};
const object2 = {order_id:"PO/01MAY2024/124",item:"AC",price:"10000"};
let comboobje = {...object1,...object2};
console.log('Combined object overlapping with object2 value');
console.log(comboobje);


function spreadSum(a,b,c,d){
    let sum = a+b+c+d;
    return sum;
}
const array1 = [4,5,6,7];
let sumAll = spreadSum(...array1);
console.log('Result of spreadSum function '+sumAll);