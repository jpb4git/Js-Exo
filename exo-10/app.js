
const sourceImg = ['img/empty.svg','img/orange.svg','img/purple.svg','img/empty-ringLess.svg','img/orange-ringLess.svg','img/purple-ringLess.svg'];
const EMPTY_CELL        = 0;
const ORANGE_CELL       = 1;
const PURPLE_CELL       = 2;
const EMPTY_RINGLESS    = 3;
const ORANGE_RINGLESS   = 4;
const PURPLE_RINGLESS   = 5;

const HumaniseColor = { 4  : 'player Orange',5  : 'player Purple' };
const cssColor = { 4  : '#FF4500',5  : '#9400D3' };

//---------------------------
const WIDTH_GRILLE      = 7;
const HEIGHT_GRILLE     = 6;
//--------------------------
const NO_DROP           = false;
const DROP              = true;
const NO_ACTION         =false;
const ACTION            =true;
// set the turn for players. first play with orange coin  ... 
let stateColor = ORANGE_RINGLESS;

let grilleAction =[
                    EMPTY_RINGLESS,
                    EMPTY_RINGLESS,
                    EMPTY_RINGLESS,
                    EMPTY_RINGLESS,
                    EMPTY_RINGLESS,
                    EMPTY_RINGLESS,
                    EMPTY_RINGLESS
                 ];

let grille = [
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
            ];      
/*-----------------------------------------------------------------------------------------------------*/

/************************************* MAIN PROGRAM *************************************************************** */
init();





/******************************************** FUNCTIONS **************************************************** */
function init(){ 
    tableDraw(WIDTH_GRILLE,1,document.getElementById('header'),grilleAction,NO_ACTION,DROP);
    tableDraw(WIDTH_GRILLE,HEIGHT_GRILLE,document.getElementById('main'),grille,ACTION,NO_DROP);
}

function cleanDraw(){
    return  [
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
                [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
            ];
}

function winMsg(element){
   var body = element;
   body.innerHTML = '';
   var win = document.createElement("div");
   win.classList.add('win');
   var h1 = document.createElement("H1");
   h1 = document.createElement("H1");
   h1.style.color = cssColor[stateColor];
   var t = document.createTextNode(HumaniseColor[stateColor] + " Win this game." );
   var img = document.createElement("img");
   img.src = setImgSource(stateColor);
   h1.appendChild(t);
   win.appendChild(h1);
   win.appendChild(img);
   body.appendChild(win);
   console.log(HumaniseColor[stateColor] + " Win this game.");
}

function tableDraw(width,height,element,grille,Action,Drop) {
    //body reference   
    var main = element;
    main.innerHTML = '';
    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    if (Action){
        tbl.classList.add("tdBg");
    }
    var tblBody = document.createElement("tbody");
    // cells creation
    for (var j = 0; j < height; j++) {
      // table row creation
      var row = document.createElement("tr");
      for (var i =0; i < width; i++) {
        var cell = document.createElement("td");
        var img = document.createElement("img");
        img.classList.add('grilleNode');


        //add event if i'm on table that handle img action drop
        if(Drop){
            img.addEventListener('click', dropCoin);
            img.addEventListener('mouseover', showCoin);
            img.addEventListener('mouseout', leaveCoin);
            img.dataset.index = i;  
        }
        // 
        if (Action){
            img.src = setImgSource(grille[j][i]);
        }else{
            img.src = setImgSource(grille[i]);
        }
      cell.appendChild(img);
      row.appendChild(cell);
      }
      //row added to end of table body
      tblBody.appendChild(row);
    }
    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    main.appendChild(tbl);
  
  }
function setImgSource(indexSource){   
    return  sourceImg[indexSource];    
  }

function dropCoin(){
        let indexI = 0;
        let indxJ  =0;
        /// here we drop coin on column // checking from bottom . 
        for (i = HEIGHT_GRILLE-1 ; i >= 0; i--){              
            if( grille [i][this.dataset.index] == EMPTY_CELL ){
                grille[i][this.dataset.index]= stateColor;
                indexI = i;
                indexJ = this.dataset.index;
                break;
            }    
        }
        
        animateCoinInTd(indexJ,indexI);
        //handling animation
        var self = this;
        setTimeout(function() {
        //we draw the board 
        tableDraw(WIDTH_GRILLE,HEIGHT_GRILLE,document.getElementById('main'),grille,ACTION,NO_DROP);        
        //
        checkWinState(grille,indexJ,indexI); 
         // we change the stateColor
         stateColor = switchStateColor(); 
          //switch visual color player
          self.src=sourceImg[stateColor];     
        }, 500,self);
       
          
        
  }
function showCoin(){
    this.src=sourceImg[stateColor]; 
}

function leaveCoin(){
    this.src=sourceImg[EMPTY_RINGLESS]; 
}
 
 /**
  * 
  */
function animateCoinInTd(indexJ,indexI){
// animation draw
        var imgAnim = document.createElement('img');
        imgAnim.src = setImgSource(stateColor);
        imgAnim.classList.add('grilleNode');
        imgAnim.classList.add('moveCoin');
        imgAnim.style.zIndex=-1;
        document.getElementById('main').appendChild(imgAnim);
        var mo = document.getElementsByClassName('moveCoin');
        mo[0].style.left = "" + 85 * parseInt(indexJ)  + "px";
        mo[0].style.animation = selectAnimCoinClass(indexI);
}

function selectAnimCoinClass(index){
    
    switch (index) {
        case 0:
            return ""        
            break;
        case 1:
            return "CoinAnimate2 0.5s"        
            break;
        case 2:
            return "CoinAnimate3 0.5s"        
            break;
        case 3:
            return "CoinAnimate4 0.5s"        
            break;
        case 4:
            return "CoinAnimate5 1s"        
            break;
        case 5:
            return "CoinAnimate6 1s"        
            break;


        default:
            break;
    }
}


function switchStateColor(){
     if (stateColor == ORANGE_RINGLESS) {
        return PURPLE_RINGLESS;
     }else{
        return ORANGE_RINGLESS;
     }

 }

function checkWinState(grille,col,row){
       // alert(col + ' - ' + row)
        resultstack = horizontalCheck(grille,col,row)
        if (resultstack){
              winMsg(document.body);

        }else{  

        }
 }

function horizontalCheck(grille,col,row){
   
    let stackcolor =0;
    let indexFirst = 0;
    col = parseInt(col);
    row = parseInt(row);
     
    for(x = 0 ; x < WIDTH_GRILLE;x++){
           if (grille[row][x] == stateColor){
                    indexFirst = x;
                    break; 
           }
    }  
    for (i = x ; i < WIDTH_GRILLE;i++){
                if (grille[row][i] == stateColor){
                    stackcolor++;
                }else{
                    break;
                }
    }

    return (stackcolor == 4) ? true : false;         
 }
function verticalCheck(grille,col,row){
    stateColor   //player
    let stackcolor =0;
    let indexFirst = 0;
    col = parseInt(col);
    row = parseInt(row);   

    for(x = 0 ; x < HEIGHT_GRILLE;x++){
           if (grille[X][col] == stateColor){
                    indexFirst = x;
                    break; 
           }
    }  
    for (i = x ; i < HEIGHT_GRILLE;i++){
                if (grille[i][col] == stateColor){
                    stackcolor++;
                }else{
                    break;
                }
    }
return (stackcolor == 4) ? true : false;  
 }
function diagonalUpCheck(){}
function diagonalDownCheck(){}


