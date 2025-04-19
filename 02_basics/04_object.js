// Singleton is create by Constructor instance of Object like this
//const hello = new Object()


//Literals Object
        // const obj1 = {}
        const obj1 = {}
        obj1.id = "123abc";
        obj1.first_name = "Sameer";
        obj1.last_name = "Haider";
        obj1.isLoggedIn =  false

        // console.log(obj1);

// Nest Object
        let obj2= {
            email : "aa@gmail.com",
            regularInfo : {
                user_name : {
                    first_name : "Sameer",
                    last_name : "Haider"
                }
            }
        }
        // console.log(obj2);
        // console.log(obj2.email);
        // console.log(obj2.regularInfo);
        // console.log(obj2.regularInfo.user_name);
        // console.log(obj2.regularInfo.user_name?.first_name);

// Combine of two or more Object in one Object
        const obj3 = {1:"a",2:"b"};
        const obj4 = {3:"c",4:"d"};

        const obj5 = {obj3, obj4}
        // console.log(obj5);

    //same key and value given
        const obj31 = {1:"a",2:"b"};
        const obj41 = {1:"a",2:"b"};
        const obj6 = Object.assign(obj31, obj41); // assign method : if duplication key value given than print one only 
        // console.log(obj6);
        
    //assign method
    //  const obj7 = Object.assign(obj3, obj4);
        const obj7 = Object.assign({}, obj3, obj4); // better way {} use

    //spread method
        const obj8 = {...obj3, ...obj4};

        // console.log(obj7);
        // console.log(obj8)

// Array Object
        const users  = [
            {
                id: "123mno",
                email: "a@gmail.com"
            },
            {
                id: "123mno",
                email: "a@gmail.com"
            },
            {
                id: "123mno",
                email: "a@gmail.com"
            },
        ]
        // console.log(users);
        // console.log(users[1]);
        // console.log(users[1].email);

    // console.log(Object.keys(obj1));
    // console.log(Object.values(obj1));
    // console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty('id'));          // hasOwnProperty('id') for checking
// console.log(obj1.hasOwnProperty('isLoggedI'));


