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

    // i)      THIS refers to the global object
    //          Variables declared with let, const, or var inside a function do not get attached to the global object due to using THIS
                function chai_2()
                    {
                        let username = "Rashid"          // Local object
                        console.log(this.username);    // Output      undefined       [Bcz this.username looks for a property called username on the global object — but it doesn't find one, hence undefined]
                        console.log(username);          //  Output      Rashid
                    }
                chai_2()
     // ii)
            let username = "Rashid"             // Global object
                const chai_3 = function()           // Called Expression function
                {
                    // console.log(this.username);         // Output        Rashid
                }
            chai_3()   

// =======================================================================
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
     // i) Explicitly means use RETURN
                const addTwo = (n1, n2) => { return n1 + n2;}
                // console.log(addTwo(5,9));           // Output           14

    // ii) Implicitly return means no need RETURN and {     } 
                // const subTwo = (n1, n2) =>  n1 - n2; 
                const subTwo = (n1, n2) =>  (n1 - n2);                          // due to single line of code

                // const subTwo = (n1, n2) =>  {username : "Shyam"};           /// Use Object {} give error bcz () is imp
                const objectUse = (n1, n2) =>  ( {username : "Shyam"} );           /// Use Object 

                // console.log(subTwo(9,5));
                // console.log(objectUse());

// ------------------------------------------------------------------------------
            const myArr =  [8,3,8,9,2]
                // myArr.forEach(function( ) {     }       )
                // myArr.forEach(             ( ) =>  {     }     )              // need RETURN
                // myArr.forEach(             ( ) =>  console.log(    )       )             // No Need RETURN for bcz of singleline of code
        
