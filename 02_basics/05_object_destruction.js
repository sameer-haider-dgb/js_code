// Destructuring is not destructive.
// Destructuring does not change the original object.

        const course ={
            coursename : "javascript",
            price : 999,
            courseInstructor : "Sameer"
        }
        // console.log(course.coursename);      // Normal way
        // console.log(course.price);

// De_Structure Object ..... see key name without Object
        const {coursename} = course;                      // Object
        // const {price, courseInstructor} = course;         // more than one   

    //  console.log(course.coursename);     // ObjectName.Key 
        // console.log(coursename);            // key Only
        
// Object Default Values means can add NEW key value like city = "Bengaluru"
        // const {price, courseInstructor, city = "Bengaluru"} = course; 
        // console.log(city);

// Object Property Alias means RE_NAME Key by :
        // const {price : coursePrice} = course; 
        // console.log(coursePrice);

// String Destructuring means give text single value
        // const [a1,a2,a3,a4,a5] = coursename; // here use KEY_NAME Not Object
        // console.log(a5);                     // output s
        
        

        


