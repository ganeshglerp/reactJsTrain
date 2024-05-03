// Task 1 L Write a function `sumAll` that uses a rest parameter to take any number 
// of arguments and returns their sum
function sumAll(...input){
    let total = 0;
    for(let i=0;i<input.length;i++){
        total += i;
    }
    return total;
}
let par1=1, par2=2, par3=4, par4=8;
let test = sumAll(par1,par2);
console.log(`Invoking with 2 parameters(${par1},${par2}), the total value of summation is ${test}`);

test = sumAll(par1,par2,par3,par4);
console.log(`Invoking sumAll function with 4 parameters(${par1},${par2},${par3},${par4}), 
the total value of summation is ${test}`);

// Task2 : Create a function `userInfo` that accepts a first name, last name, and a rest parameter for hobbies. 
// The function should return an object containing the name (first and last combined) and an
// JavaScript Rest Parameters Assignment array of hobbies

function userInfo(firstName,lastName,...hobbies){
    let userDetails = {name:`${firstName} ${lastName}`,userhobbies:hobbies}

    console.log(`Printing the Object`);
    console.log(userDetails);

    console.log(`User full name after parsing is ${userDetails.name}`);
    console.log(`User Hobbies are : ${userDetails.userhobbies}.`);
}

console.log('------------------1st Call---------------------------');
userInfo('Shyam','Sundar','Listening Music','Reading');
console.log('-------------------2nd Call--------------------------');
userInfo('Bharath','Golla','Playing Chess','Swiming');
console.log('---------------------3rd Call------------------------');
userInfo('Namish','Golla','Dancing','Reading');
