/* 
        IIFE stand for Immediately Invoked Function Expressions
        Use bcz global scope make pollution / problem on entire code due to declare or define values, use to make remove this type of issue  
        also use for immediate function execution
  */

    // i) Normal Function
            function DbConnection_1(){
                console.log("DB_1 Connect done");
            }
            DbConnection_1();
    // ii) IIFE     ()()        Function and Execution
            (
                function DbConnection_2() {               // Name IIFE  is DbConnection_2
                console.log("DB_2 Connect done");
                }
            )();                                                           // if more than one IIFE concept use than End First IIFE Function by ;
    // iii)     Arrow Function
            (
                ( ) =>  {                                               // Without Name IIFE
                console.log("DB_3 Connect done");
                }
            )();
    // iv)     Arrow Function with Parameter
            (
                (name ) =>  {
                console.log(`DB_4 Connect done ${name} `);
                }
            )("MongoDB")