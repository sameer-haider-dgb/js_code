// Syntex : function function_Name () { }

        function addTwoNumber (number1, number2)
            {
                let result = number1 + number2;
                // console.log("Addition ");
                return result;
                console.log("Addition ");       // not work bcz of return keyword
            }
        // console.log(addTwoNumber);                      // reference
        // console.log(addTwoNumber());                    // execution or call function
        // console.log(addTwoNumber(4, 6));               // give value

        const output = addTwoNumber(2, 3);
            // console.log(output);

     // i)    
            function loginUserMessage(username) {
            return `${username} is just logged In`;
        }
        // console.log(loginUserMessage("Sameer"))             // output =   Sameer is just logged In
        // console.log(loginUserMessage())                             // output =  undefined is just logged In
    // ii) 
            function login(user_name){
                // if(user_name === undefined)
                    if(!user_name)                              // same
                    {
                    return "Please enter user name"
                }
                return `${user_name} is just logged in`
            }
            // console.log(login());
            // console.log(login("Google"));

// Default value 
        function login(user_name = "Sam"){
                if(!user_name)                              
                {
                return "Please enter user name"             // never execute bcz at least  Sam is available in user_name
            }
            return `${user_name} is just logged in`
        }
        // console.log(login());
        console.log(login("Razzaque"));

            




