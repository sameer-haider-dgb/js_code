        let user = {
            username : "sameer",
            price : 999,
            welcomeMessage : function(){
                console.log(`${this.username}, welcome to my websites`);        // using         this.
                // console.log(this);           // related to 10 and 13 line
                
            }
        }
        // user.welcomeMessage()
        // // add new value in object
        // user.username = "Abdul Razzaque"
        // user.welcomeMessage()       // changes will be showing here

        // console.log(this);
// ==================================================================
        function chai_1()
        {
        //     console.log(this);       // Give big info
        }
        chai_1()

    // i)    
                function chai_2()
                {
                    let username = "Rashid"
                //     console.log(this.username);         // undefined
                }
                chai_2()
     // ii)
            const chai_3 = function()           // Called Expression function
            {
                let username = "Rashid"
                // console.log(this.username);         // undefined
            }
            chai_3()   
// ARROW Function by      ()  =>  {      }
    // Arrow function without parameter
            const chai_4 = () =>  {
                let username = "Rashid"
                // console.log(this);         //  {}   empty
                // console.log(this.username);         // undefined
            }
            chai_4()   
// ------------------------------------------------------------------------------------
 // Arrow function with parameter
     // i) Explicitely means use RETURN
        const addTwo = (n1, n2) => { return n1 + n2;}
        // console.log(addTwo(5,9));           // Output           14

    // ii) Implicitely return means no need RETURN and {     } 
        // const subTwo = (n1, n2) =>  n1 - n2; 
        const subTwo = (n1, n2) =>  (n1 - n2);                          // due to single line of code

        // const subTwo = (n1, n2) =>  {username : "Shyam"};           /// Use Object {} give error bcz () is imp
        const objectUse = (n1, n2) =>  ( {username : "Shyam"} );           /// Use Object 

        console.log(subTwo(9,5));
        console.log(objectUse());

// ------------------------------------------------------------------------------
            const myArr =  [8,3,8,9,2]
            myArr.forEach(function( ) {     }       )
            myArr.forEach(             ( ) =>  {     }     )              // need RETURN
            myArr.forEach(             ( ) =>  console.log(    )       )             // No Need RETURN for bcz of singleline of code
        
