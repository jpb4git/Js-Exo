BgGreen = "\x1b[42m%s";
BgRed = "\x1b[41m";
FgWhite = "\x1b[37m"


let T1 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0, 0],
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
            [5, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//false
let T8 =[
            [0, 0, 5, 0, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T9 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 0, 5, 0, 0],
        ];//true
let T10 =[
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
        ];//false
let T11 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0],
        ];//true
let T12 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T13 =[
            [0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//false
let T14 =[
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T15 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 5],
            [0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
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
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 5],
        ];//true
let T19 =[
            [5, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true

let DriveTestHorizontal = [
            {'name':T1, y:5 , x:0 , result : true},
            {'name':T2, y:5 , x:1 ,result : true},
            {'name':T3, y:5 , x:5 ,result : false},
            {'name':T4, y:3 , x:0 ,result : true},
            {'name':T5, y:3 , x:1 , result : true},
            {'name':T6, y:3 , x:3 ,result : true}
        ];
let DriveTestVertical = [
            {'name':T7, y:0 , x:0,result : false},
            {'name':T8, y:3 , x:0,result : true},
            {'name':T9, y:3 , x:4,result : true},
            {'name':T10,y:3 , x:0,result : false}
        ];
let DriveTestSlash = [    
            {11:'T11',result : true},
            {12:'T12',result : true},
            {13:'T13',result : false},
            {14:'T14',result : true},
            {15:'T15',result : true}
        ];
let DriveTestAntiSlash = [    
            {16:'T16',result : true},
            {17:'T17',result : true},
            {18:'T18',result : true},
            {19:'T19',result : true},
        ];

function LaunchTest(){

    DriveTestHorizontal.forEach(element => {
          
            console.log("//-------------------------------------------//");
            console.log("test : " + element.name);    
            console.log(T1);
            console.log("y : " + element.y, "x : " + element.x)
            console.log("resultat de la fonction : " + checkWinState(element.name,element.x,element.y));
            if (element.result == checkWinState(element.name,element.x,element.y)){
           
                console.log(BgGreen +FgWhite, "Test OK ! ");
            }else{
                console.log("\x1b[41m%s\x1b[37m" , "Test not passed OK ! ");
            }
           
       
    });

    console.log("//-------------------------------------------//"); 
    console.log("//-------------------------------------------//");

    DriveTestVertical.forEach(element => {
          
        console.log("//-------------------------------------------//");
        console.log("test : " + element.name);    
        console.log(T1);
        console.log("y : " + element.y, "x : " + element.x)
        console.log("resultat de la fonction : " + checkWinState(element.name,element.x,element.y));
        if (element.result == checkWinState(element.name,element.x,element.y)){
            console.log(BgGreen+FgWhite , "Test OK ! ");
        }else{
            console.log("\x1b[41m%s\x1b[37m" , "Test not passed OK ! ");
        }
        console.log("//-------------------------------------------//"); 
        console.log("//-------------------------------------------//");
   
});




}

if (debug){
    LaunchTest(DriveTestHorizontal);
}




