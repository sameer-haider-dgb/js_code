
      const person = {
        firstname: "John",
        lastname: "Doe",
        age: 50,
        eyecolor: "blue"
      };
      // console.log(person.age, person["eyecolor"]);

//Adding New Properties
      person.country = "England"
      // console.log(person.country);

// Adding a method/function to an Object person = {           }
      person.name = function(){
            return this.firstname + "  " + this.lastname;
      }
      console.log(person.name());
      
  
  