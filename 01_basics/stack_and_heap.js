//Stack(Primitive)  ->  it take copy of variable value 
// that's why original value of variable is not change
        let myYoutubename = "googledotcom"
        let anothername = myYoutubename

        // console.log(anothername);

        anothername= "microsoftdotcom"

        console.log(myYoutubename);
        console.log(anothername);

//Heap (Non Primitive) -> it take Reference of variable value
// that's why if we changes variable values, it will be change
// userOne or userTwo is actually written in Object Literal way 
// that's why it take reference
        let userOne = {
            email: "google@com",
            password: "google123"
        }
        console.log(userOne);
         
        let userTwo  = userOne
        // console.log(userTwo);
        userTwo.email= "microsoft@outlook.com"
        console.log(userTwo);
        
        

