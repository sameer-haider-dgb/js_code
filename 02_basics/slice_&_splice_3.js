const myArr = [11,45,89,23,75,66];
// console.log("1 ->",myArr);

const mySlice = myArr.slice(1,4);
console.log("2 ->",mySlice);

const mySplice = myArr.splice(1,4);
console.log("3 ->",myArr); // due use splice method , main myArr are manipulated/changes

console.log(mySplice);