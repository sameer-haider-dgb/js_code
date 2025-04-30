const myArr = [0,1,2,3,4,5]
console.log("A ", myArr)                                    // Output       A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log("B ", myn1)                                     // Output       B  [ 1, 2 ]

const myn2 = myArr.splice(0,0, "D ", "E")          
console.log("C ", myArr);                                   //Output      C  [ 'D ', 'E', 0, 1,
                                                                          //                        2,    3,   4, 5
                                                                          //                     ]   

console.log("Blank bcz of 0, 0 "+myn2);             // Output       Blank bcz of 0, 0 

const myn3 = myArr.splice(2,3, "D ", "E")         
console.log("D ", myArr);                                     // Output       D  [
                                                                            //                           'D ', 'E', 'D ',
                                                                            //                           'E',  3,   4,
                                                                            //                           5
                                                                            //                       ]

console.log(myn3);                                              //Output        [ 0, 1, 2 ]
