    var studentProfile = { 
        firstName:"Ganesh", 
        lastName:"Golla",
		class:{
			name: "Introduction to E6 JavaScript",
			teacher: {
			  name: "Ajay Kumar",
			  email: "kumar@jatanix.com"
			},
			grades:[
			  {Maths: "A"},
			  {Physics:"B"},
			  {Chemistary:"B+"},
			  {English:"A"}
			],
		},
		maxMarks:{Maths:"A+",Physics:"A+",Chemistary:"A+",English:"A"},
		func:function(){return "Assignment1 : Student details"} 
	}
 
    //access the object values 
    console.log(studentProfile.func());
    console.log(studentProfile.firstName+" "+studentProfile.lastName);
    console.log(studentProfile["class"]["name"]);
    console.log(studentProfile.class.teacher.email);
    console.log(studentProfile["class"]["teacher"]["email"]);
	
	//Updating the Grade values
	
    console.log("Beforing updating grade for Maths :"+studentProfile.class.grades[0].Maths);//Grades as Static Array
	console.log("Beforing updating grade for Maths :"+studentProfile.maxMarks.Maths);//Grades as Object

	// Dyanmic update
	for (let i=0; i<studentProfile.class.grades.length; i++){
		console.log("Verifying for Maths object :" );
		if(studentProfile.class.grades[i].Maths){
			console.log("Identified Object :"+studentProfile.class.grades[i].Maths);
			studentProfile.class.grades[i].Maths="B+"
			console.log("Updated Identified Object :"+studentProfile.class.grades[i].Maths);
		}
	}
	
	studentProfile.class.grades[0].Maths="A+"
	console.log(studentProfile);
    console.log("Updated Value is :"+studentProfile["class"]["grades"][0].Maths);
	