// i) 
        function one(){
            const username = "Sameer";
            function two(){
                const website = "Google";
                // console.log(username);             // Output = Sameer      
            }
            // console.log(website);                // error = website is not defined
            two()
            // console.log(two());                         // Output = undefined
        }
        one();                          // one() function is depend upon two() function
// ii)
        if(true)
        {
            const username = "Sameer";
            if(username ===  "Sameer")
            {
                const channel = "youtube Channel";
                console.log(username + " "+ channel);
            }
            // console.log(channel);   // Out of scope 
        }
        // console.log(username);      // out of scope
        