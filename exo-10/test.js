let DriveTestHorizontal = [
    {'name':'T1', y:5 , x:0 , result : true},
    {'name':'T2', y:5 , x:1 ,result : true},
    {'name':'T3', y:5 , x:5 ,result : false},
    {'name':'T4', y:3 , x:0 ,result : true},
    {'name':'T5', y:3 , x:1 , result : true},
    {'name':'T6', y:3 , x:3 ,result : true}
];
let DriveTestVertical = [
    {7:'T7',result : false},
    {8:'T8',result : true},
    {9:'T9',result : true},
    {10:'T10',result : false}
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
            [0, 5, 5, 5, 5, 0, 0],
        ]; // true
let T3 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 5, 5, 5, 0, 5, 0],
        ]; //false
let T4 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [5, 5, 5, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T5 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 5, 5, 5, 5, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];//true
let T6 =[
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 5, 5, 5, 5],
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


function LaunchTest(){
    console.log("//-------------------------------------------//");
        console.log("test : " + DriveTestHorizontal[0].name);    
        console.log(T1);
        console.log(DriveTestHorizontal[0].y,DriveTestHorizontal[0].x)
        console.log(checkWinState(T1,DriveTestHorizontal[0].x,DriveTestHorizontal[0].y));
        console.log("Result must be : " + DriveTestHorizontal[0].result); 
        console.log("//-------------------------------------------//"); 
        console.log("//-------------------------------------------//");
        
        console.log("test : " + DriveTestHorizontal[1].name);
        console.log(T2);
        console.log(DriveTestHorizontal[1].y,DriveTestHorizontal[1].x)
        console.log(checkWinState(T2,DriveTestHorizontal[1].x,DriveTestHorizontal[1].y));
        console.log("Result must be : " + DriveTestHorizontal[1].result); 
        console.log("//-------------------------------------------//");
        console.log("//-------------------------------------------//");
        
        console.log("test : " + DriveTestHorizontal[2].name);
        console.log(T3);
        console.log(DriveTestHorizontal[2].y,DriveTestHorizontal[2].x)
        console.log(checkWinState(T3,DriveTestHorizontal[2].x,DriveTestHorizontal[2].y));
        console.log("Result must be : " + DriveTestHorizontal[2].result); 
        console.log("//-------------------------------------------//");
        console.log("//-------------------------------------------//");
        
        
        console.log("test : " + DriveTestHorizontal[3].name);
        console.log(T4);
        console.log(DriveTestHorizontal[3].y,DriveTestHorizontal[3].x)
        console.log(checkWinState(T4,DriveTestHorizontal[3].x,DriveTestHorizontal[3].y));
        console.log("Result must be : " + DriveTestHorizontal[3].result); 
        console.log("//-------------------------------------------//");
        console.log("//-------------------------------------------//");


}

if (debug){
    LaunchTest(DriveTestHorizontal);
}




