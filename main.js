console.log("Sanity"); // sanity check!!

// ### Problem 1:
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
// The class should have a method that prints a product's information in the following format: 
// ``` Banana, price 1.1, amount 13```. Create two instances of the class and call the method created to print the product's details.

class Product {
    constructor(name, price, quantity)
    {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    print(){
        console.log(`${this.name}, $${this.price}, amount:${this.quantity}`);
    }
}
exercise1 = () => {
let product1 = new Product("Moniter", "159.00", "1");
let product2 = new Product("Keyboard", "160.00", "3");
product1.print();
product2.print();
}
// exercise1();


// ### Problem 2:







// Define a class called Pet with three properties, type, breed and age. 
class Pet {
    constructor(type, breed, age)
    {
        this.type = type;
        this.breed = breed;
        this.age = age;
    }
    // Create a method called formatProperties that prints all object properties using string templating. 
    formatProperties() {
        console.log(`${this.type}, ${this.breed}, ${this.age}`);
    }
    // Create a method called changeAge that takes a number and updates the age property of an object. 
    changeAge(number) {
        this.age = parseFloat(this.age);
        this.age = number;
        console.log(`${this.type} is now ${this.age} Years old.`);
    }
    // Create a method called dogYears that checks if the pet type of the object is dog, if so return the age in dog years (age times 7),
    dogYears(){
        if(this.type === "dog")
        {
            this.age = parseFloat(this.age);
            return console.log(`${this.type} is ${(this.age * 7)} in dog years`);

        }
        //  otherwise return the message "[PET TYPE] is not a dog!".
        else{
            console.log(`${this.type} is NOT a dog!!`);
        }
    }
}




exercise2 = () =>{

///////CHECK OUR PROPERTIES/METHODS////////////
// Create an instance of the Pet Class called pet1. 
let pet1 = new Pet("dog", "Great Dane", "2");
pet1.formatProperties();
pet1.changeAge(7);
pet1.dogYears();
//   Create another instance of the Pet Class with diffrent property values called pet2. 
let pet2 = new Pet("dog", "husky", "3");
pet2.formatProperties();
 pet2.changeAge(4);
pet2.dogYears();

//  Print all property values of the object using the class method.

//   Print all property values of the object using the class method. 
//   Change the age grade of pet1. Print the age of pet1 in dog years using the class method. 
//   Print the age of pet2 in dog years using the class method.
}
// exercise2();


// ### Problem 3: Inheritance
// Create a Person Class with the properties Name (first, last), Age, Interests, Bio ('NAME is AGE years old. They like INTERESTS')

class Person {
    constructor(name, age, interests,){
    this.name = name;
    this.age = age;
    this. interests = interests;
    // this.bio = ``;
}
bio(){
    console.log(`${this.name} is ${this.age}, and likes ${this.interests}`)
}
// print(){
//     console.log(`${this.bio}`);
// }
}

// person1.bio();
// person2.bio();
// person2.print();
// Create a class called Student that extends Person and adds the property Cohort to student.








class Student extends Person {

    constructor(name, age, interests, cohort){
        super(name, age, interests);
        this.cohort = cohort;
    }
    studentBio(){
        console.log(`${this.name} is ${this.age}, likes ${this.interests}, and is in cohort ${this.cohort}`);
    }
}

// student1.bio();
// student1.studentBio();
// student2.studentBio();
// student3.studentBio();
// student4.studentBio();







// Create a class called Teacher that extends Person and adds the properties subject, 
 // and students (students should be an array of Student objects) Create a method called addStudent 
 //that takes an instance of Student and adds a student object to the students array.

 class Teacher extends Person {
     constructor(name, age, interests, subject, bio)
     {
         super(name, age, interests, bio);
         this.subject = subject;
         this.studentsArr = [];
        
         
       
         
       
        } 

        // we want a METHOD to pass in a STUDENT to push into the TEACHER student array
        addStudent(studentname){
            this.studentsArr;
            let string = JSON.stringify(studentname);
             return this.studentsArr.push(string);
             
        } 
      

        print(){
            console.log(`${this.name} is ${this.age}, likes ${this.interests}, teaches ${this.subject} and has ${this.studentsArr.length} students`);
        }
      

      studentPrint(student, teacher) {
        console.log(`${student.name} is ${student.age}, likes ${student.interests}, is in cohort ${student.cohort} and is a student of ${teacher.name}`);
      }
        // teacherBio(){
        //     this.addStudent()
        //     console.log(studentsArr + " students");
        //     // console.log(`${this.name} is ${this.age}, likes ${this.interests}, teaches ${this.subject} and has ${this.studentsArr} students!`);
        // }
        
 }
 let teacher1 = new Teacher("Blake Lively", "44", "Cooking", "History");
 let teacher2 = new Teacher("Sierra Grayson", "36", "Bass playing", "Math");

exercise3 = () => {
let person1 = new Person ("Lizzy Rhodes", "22", "Programming & Art");
let person2 = new Person("Jill Green", "23", "Dancing and singing" );

let student1 = new Student("Lizzy Rhodes", "22", "Programming & Art", "2022");
let student2 = new Student("Jill Green", "23", "Dancing and singing" , "2022");
let student3 = new Student("Will Dean", "30", "Dancing" , "2022");
let student4 = new Student("Patrick Harris", "25", "Playing Drums" , "2022");


 teacher1.addStudent(student1);
 teacher1.addStudent(student2);
 teacher1.print();
 teacher1.studentPrint(student1, teacher1);
 teacher1.studentPrint(student2, teacher1);


 teacher2.addStudent(student3);
 teacher2.addStudent(student4);
 teacher2.print();
 teacher2.studentPrint(student3, teacher2);
 teacher2.studentPrint(student4, teacher2);

};
exercise3();
// Create an instance of the Teacher class called teacher1 with an empty student array.
// Create another instance of this class called teacher2 with an empty student array. 
//Add two students to teacher1 using the class method. 
//Add two students to teacher2 using the class method. 
//List all students associated with teacher1 using the class method. 
//List all studnets associated with teacher2 using the class method.


 
 // we want the students to show up in the teacher bio!!
// teacher1.studentsArr.forEach(el => {
//     console.log(el.); 
// });



// class Student extends Person {
    
//     constructor(name, age, interests, cohort){
//         super(name, age, interests);// reference to the last class!
//         // this.name = name;
//         // this.age = age;
//         // this.interests = interests;
//         this.cohort = cohort;}
        
    
      
//     }
//     // printstudent(){
//     //     console.log(`${this.} ${this.cohort}`);
//     //  }




// let student1 = new Student("2022");
// // let student2 = new Student(`${person2.bio} is in cohort ${this.cohort}`);
// student1.printstudent();
// // student2.print();


// class Teacher extends Person {
//     constructor(subject){
//         super();
//         this.subject = subject;
//         this.students = [];
//     }
//     addStudent(studentnum) {
//         this.students.push(studentnum);
//         console.log(`The student ${this.students}`)
//     }
// }
// let teacher1 = new Teacher("Math");
// teacher1.addStudent(student1);
// // console.log(` The teacher teaches ${teacher1.subject} has a student ${person1.bio}`);




// class Teacher extends Person {
//     constructor(subject){
//         this.subject = subject;
//         this.students = [];
//     }
//    
//     addStudent(studentobj) {
//         this.studentobj = studentobj;
//        return this.students.push(this.studentobj);
//     }
// // 
//  }

// Create a method called listAllStudents that prints every student name and student cohort associated with a teacher. 





// let studen1 = new Student("Lizzy Rhodes", "22", "Programming & Art", "2021");
// studen1.print();


// addStudent(){
//     //             let studentsArr = [];
//     //             let studentsArr2 =[];
    
//     //     studentsArr.push(student1, student2);
//     //     console.log(studentsArr[0]);
//     //     console.log(`${this.name} is ${this.age}, likes ${this.interests}, teaches ${this.subject} and has ${studentsArr.length} students!`)
//     // }