// i)   Object Laterals
    // const  obj = {}
    const sym = Symbol("Key1")      // Symbol 

        const obj = {                           // create Object
            name : "Rahul",
            "full name" : "Kumar Singh",
            isLoggedIn : false,
            email : "rahul@gmail.com",

            obj2: {                                 // nest Object
                address : "Bengaluru",
                country : "India"
            },
            [sym] : "myKey2"
            // sym : "myKey3"
        }

// Accessing Object
        // console.log(obj);

        // console.log(obj.name);
        // console.log(obj["name"]);
        // console.log(obj["full name"]);

        // console.log(obj[sym]);
        // console.log(typeof obj[sym]);

// changing in Object values
        obj.email = "r@gmail.com"
        // console.log(obj.email);

 // Fixed Object Values
        // Object.freeze(obj);
                obj.email = "rkumar@gmail.com"; // Not change due to FREEZE
                // console.log(obj.email);

// Function
        obj.greeting = function(){
            console.log(`Hello World`);
            console.log(`Hello ${this.name}`);
        }
        // console.log(obj.greeting);           // output   [Function (anonymous)]
        console.log(obj.greeting());            // output   Hello Rahul
        
                       
        





