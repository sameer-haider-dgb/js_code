// Array Destructuring
        const cars  = ["Punch", "Nexon", "Celereo", "Swift","Brezza"]

        // const [c1, c2] = cars
        // console.log(c2);

// Skipping Array Values by using  , 
        // const [c1,c2,,,c3 ] = cars          // print 5 position value but write c3 not c5
        // console.log(c3);

// Array Position Values gives INDEX
        const 
        {  [0] : c1, [3] : c2 }  = cars
        // console.log(c2);
        
// The Rest Property using spread concept ...
        const numbers = [10, 20, 30, 40, 50, 60, 70];
        const [a,b, ...rest] = numbers
        // console.log(rest);

// Swapping JavaScript Variables
        let firstName = "Sameer";
        let lastName = "Haider";
        [firstName, lastName] = [lastName, firstName]; // alti palti
        console.log(firstName);

// Destructuring Maps
        // Create a Map
        const fruits = new Map([
            ["apples", 500],
            ["bananas", 300],
            ["oranges", 200]
        ]);
        
        // Destructing
        let text = "";
        for (const [key, value] of fruits) {
            text += key + " is " + value +", ";
        }
        console.log(text);
        
        

        


        