const myArr = [11,45,89,23,75,66];
// console.log("1 ->",myArr);

const mySlice = myArr.slice(1,4);               
console.log("2 ->",mySlice);                            // Output       2 -> [ 45, 89, 23 ]

const mySplice = myArr.splice(1,4);
console.log("3 ->",myArr);                              //Output        3 -> [ 11, 66 ]             and due use splice method , main myArr are manipulated/changes

console.log(mySplice);                                  // Output       [ 45, 89, 23, 75 ]