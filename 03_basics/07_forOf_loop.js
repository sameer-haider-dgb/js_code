// forOf Loop
// Benefit is we do not require length of variable
// i)      
    const arr = [123, "Sameer", 'A', true];
        for (const a of arr) {
            // console.log(a);
        }
// ii)
    const name = "Md Abdul Razzaque";
        for (const n of name) {
            if (n==" ") {
                continue;
            }
            // console.log(n);  
        }

// iii) Map() Object use
    const myMap = new Map();
        myMap.set("IN", "India")
        myMap.set("FR", "France")
        myMap.set("EN", "England")
        myMap.set("IN", "India")
                                        // output is given in Object Form and Duplicacy is not Allow
        // console.log(myMap);             // Output = Map(3) { 'IN' => 'India', 'FR' => 'France', 'EN' => 'England' }

//  Output comes in both Key and Value    
        for (const mapping of myMap) {     // Output = in Array form
            // console.log(mapping); // Output=  [ 'IN', 'India' ]
                                             //  [ 'FR', 'France' ]
                                             //  [ 'EN', 'England' ]
            
        }

// Only take Key OR Value   by using this   []
        for (const [k] of myMap) {
            // console.log(k);               // Output = IN    FR  EN      
        }        

        for (const [k, v] of myMap) {
            // console.log(v);                 // Output =     India   France  England    
        }

        for (const [key, value] of myMap) {
            console.log(`Country Name with Symbols ${key} :- ${value}`)             // Output comes in Normal form
        }

