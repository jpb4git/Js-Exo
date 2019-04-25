BgGreen = "\x1b[42m%s";
BgRed = "\x1b[41m";
FgWhite = "\x1b[37m"


let T1 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [4, 4, 4, 4, 0, 0, 0],
        ]; //true
let T2 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 4, 4, 4, 4, 0, 0],
        ]; // true
let T3 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0,4, 4, 4, 0, 4, 0],
        ]; //false
let T4 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [4, 4, 4, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T5 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 4, 4, 4, 4, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T6 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 4, 4, 4],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true   
let T7 =[
            [4, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//false
let T8 =[
            [0, 0, 4, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T9 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 0, 4, 0, 0],
        ];//true
let T10 =[
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
        ];//false
let T11 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0],
        ];//true
let T12 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T13 =[
            [0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//false
let T14 =[
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T15 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
        ];//true
let T16 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
        ];//true
let T17 =[
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T18 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 4],
        ];//true
let T19 =[
            [4, 0, 0, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true

let DriveTestHorizontal = [
            {name : "T1", 'var':T1, y:5 , x:0 , result : true},
            {name : "T2",'var':T2,  y:5 , x:1 ,result : true},
            {name : "T3",'var':T3,  y:5 , x:5 ,result : false},
            {name : "T4",'var':T4,  y:3 , x:0 ,result : true},
            {name : "T5",'var':T5,  y:3 , x:1 , result : true},
            {name : "T6",'var':T6,  y:3 , x:3 ,result : true}
        ];
let DriveTestVertical = [
            {name : "T7",'var':T7, y:0 , x:0,result : false},
            {name : "T8",'var':T8, y:0 , x:2,result : true},
            {name : "T9",'var':T9, y:2 , x:4,result : true},
            {name : "T10",'var':T10,y:3 , x:0,result : false}
        ];
let DriveTestSlash = [    
            {name : "T11",'var':T11,result : true},
            {name : "T12",'var':T12,result : true},
            {name : "T13",'var':T13,result : false},
            {name : "T14",'var':T14,result : true},
            {name : "T15",'var':T15,result : true}
        ];

let DriveTestAntiSlash = [    
            {name : "T16",'var':T16,result : true},
            {name : "T17",'var':T17,result : true},
            {name : "T18",'var':T18,result : true},
            {name : "T19",'var':T19,result : true},
        ];

function LaunchTest(){

    console.log("\x1b[44m%s","//-------------------------------------------//");
    console.log("\x1b[44m%s","//---------------- HORIZONALS TESTS --------//");
    DriveTestHorizontal.forEach(element => {
          
            console.log("                                       ");
            console.log("test : " + element.name);    
            console.log(element.var);
            console.log("y : " + element.y, "x : " + element.x)
            console.log("resultat de la fonction : " + horizontalCheck(element.var,element.x,element.y));
            if (element.result == horizontalCheck(element.var,element.x,element.y)){
           
                console.log(BgGreen +FgWhite, "Test OK ! ");
            }else{
                console.log("\x1b[41m%s\x1b[37m" , "Test not passed ! ");
            }
           
       
    });

    console.log("\x1b[44m%s","//-------------------------------------------//");
    console.log("\x1b[44m%s","//------------------ VERTICALS TESTS --------//");

    DriveTestVertical.forEach(element => {
          
         console.log("                                       ");
        console.log("test : " + element.name);    
        console.log(element.var);
        console.log("y : " + element.y, "x : " + element.x)
        console.log("resultat de la fonction : " + verticalCheck(element.var,element.x,element.y));
        if (element.result == verticalCheck(element.var,element.x,element.y)){
            console.log(BgGreen+FgWhite , "Test OK ! ");
        }else{
            console.log("\x1b[41m%s\x1b[37m" , "Test not passed ! ");
        }
        console.log("//-------------------------------------------//"); 
        console.log("//-------------------------------------------//");
   
    });

    console.log("\x1b[44m%s","//-------------------------------------------//");
    console.log("\x1b[44m%s","//---------------- SLASH TESTS       --------//");

    DriveTestSlash.forEach(element => {
            console.log("                                       ");
            console.log("test : " + element.name);    
            console.log(element.var);
            console.log("resultat de la fonction : " + diagonalSlashCheck(element.var));
            if (element.result == diagonalSlashCheck(element.var)){
           
                console.log(BgGreen +FgWhite, "Test OK ! ");
            }else{
                console.log("\x1b[41m%s\x1b[37m" , "Test not passed ! ");
            }
           
       
    });


console.log("\x1b[44m%s","//-------------------------------------------//");
    console.log("\x1b[44m%s","//---------------- ANTI SLASH TESTS       --------//");
    DriveTestAntiSlash.forEach(element => {
            console.log("                                       ");
            console.log("test : " + element.name);    
            console.log(element.var);
            console.log("resultat de la fonction : " + diagonalAntiSlashCheck(element.var));
            if (element.result == diagonalAntiSlashCheck(element.var)){
           
                console.log(BgGreen +FgWhite, "Test OK ! ");
            }else{
                console.log("\x1b[41m%s\x1b[37m" , "Test not passed ! ");
            }
           
       
    });



}


//---------------------------------------------------------------------------
if (TestLauncher){
    LaunchTest(DriveTestHorizontal);
}




