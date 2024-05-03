
let fruits = ["Apple", "Banana", "Cherry"]

let [fruit1, fruit2, fruit3] = fruits;
console.log(`The first value of fruit array is ${fruit1}.`);
console.log(`The first value of fruit array is ${fruit3}.`);

let user = {
    firstName: "Ganesh",
    lastName: "Golla",
    age: 30,
    email: "ganeshg.lerp@gmail.com"
    };

    let {firstName:sdtFirstName, lastName:sdtLastName, age, email} = user;
    console.log(`The first name of user object is ${sdtFirstName}.`);
    console.log(`The last name of user object is ${sdtLastName}.`);
    console.log(`email from user object is ${email}.`);

    let userInfo = {
        firstName: "Namish",
        lastName: "Golla",
        age: 5,
        email: "ganeshg.lerp@gmail.com",
        address:{street:"Banaswadi",
                 city:"Bengaluru"}
        };
    
    let {firstName:stdFirstName, lastName:stdLastName, stdAge, stdEmail, address:{street,city}} = userInfo;
    
    console.log(`First name extracted from user object is ${sdtFirstName}.`);
    console.log(`Last name extracted from user object is ${sdtLastName}.`);
    console.log(`Street value extracted from nested component user object ${street}`);
    console.log(`City value extracted from nested component user object ${city}`);

    function destrObject(employee){ 
        let{firstName,email}=employee;
        console.log(`First name extracted from user object using parameter function ${firstName}`);
        console.log(`Email ID extracted from user object using parameter function ${email}`);
    
    }
        
    destrObject(user);