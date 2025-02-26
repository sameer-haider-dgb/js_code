const accountId = 123654
let accountEmail = "sam@google.com"
var accountPassword = "125478"

accountCity = "Bhopal" // without variable use here

let accountState    // nothing define any value give undefined

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])

// try to change values
    // accountId=569874
    // console.log(accountId);  //bcz use const 
    accountEmail = "arman@google.com"
    accountPassword = "99999"
    accountCity = "Bengalore"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])




