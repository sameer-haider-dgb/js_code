const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString);
// console.log(balance.toFixed(2));   //VVI it's method & give two value after decimal 

const otherNumber= 123.8966
// console.log(otherNumber.toPrecision(4));        
// console.log(otherNumber.toPrecision(3));        // output 124 not 123.8966

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));  // 'en-IN' comes output in India way

// ============================  Math  ===============================================
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.3));
// console.log(Math.round(4.5));
// console.log(Math.round(4.9));

// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.floor(4.9));

// console.log(Math.min(9,5,1,6,7));
// console.log(Math.max(9,5,1,6,7));

    console.log(Math.random());
// want more than ONE (1) value
    console.log(Math.random()*10);
// more than 1 + value    
    console.log((Math.random()*10)+1);

    console.log(Math.ceil((Math.random()*10)+1));
    console.log(Math.floor((Math.random()*10)+1));

// Give range between 10 to 20
    let min = 10
    let max = 20

    console.log(Math.floor(Math.random()*(max-min+1))+min);
    











