const myArr = [0,1,2,3,4,5]
console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log("B ", myn1)

const myn2 = myArr.splice(0,0, "D ", "E")
console.log("C ", myArr);
console.log("Blank bcz of 0, 0 "+myn2);

const myn3 = myArr.splice(2,3, "D ", "E")
console.log("D ", myArr);
console.log(myn3);
