
    // i)
        function calculateCartPrice_1(num1) {
                    return num1;
                }
        // console.log(calculateCartPrice_1(101, 414, 522, 956));         // Output =  101 [Bcz give first value]

    // ii)  rest Operator    by       ...num1
        function calculateCartPrice_2(...num1) {
                            return num1;
                        }
        // console.log(calculateCartPrice_2(101, 414, 522, 956));         // Output = [ 101, 414, 522, 956 ]

// iii) Object use in Function
        let user = {
            username : "Sameer",
            price : 199
        }
        function handleObject(anyuser)
        {
            // console.log(`Username is ${anyuser.username} and price is ${anyuser.price}`);
        }
        // handleObject("Alpha", 33)               // Output = Username is undefined and price is undefined 
        handleObject(user)                         // Output = Username is Sameer and price is 199    &      Use Object Name here 

// iv) Another way to execute Object 
        function handleObject(anyuser)
        {
            // console.log(`Username is ${anyuser.username} and price is ${anyuser.price}`);
        }
        handleObject(                                   // Direct give Object in Function Execution
            {
                username : "Razzaque",
                price : 499
            }
        )

// v)    Array in function
        function returnArrayValue(anyArrayIndex){
            return  console.log(anyArrayIndex[2])
        }
        returnArrayValue( myNewArray = [200, 522, "Sam", 899, false]    )

        
