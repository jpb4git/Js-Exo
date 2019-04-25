let TestLauncher = false;

const sourceImg = ['img/empty.svg','img/orange.svg','img/purple.svg','img/empty-ringLess.svg','img/orange-ringLess.svg','img/purple-ringLess.svg'];
const EMPTY_CELL        = 0;
const ORANGE_CELL       = 1;
const PURPLE_CELL       = 2;
const EMPTY_RINGLESS    = 3;
const ORANGE_RINGLESS   = 4;
const PURPLE_RINGLESS   = 5;

const HumaniseColor = { 4  : 'player Orange',5  : 'player Purple' };
const cssColor = { 4  : '#FF4500',5  : '#9400D3' };

const WIDTH_COIN = 85;
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
// tableau de vecteur des jetons gagnants
let vectorWinPosition  = [];

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
if (!TestLauncher){
    init();
}






/******************************************** FUNCTIONS **************************************************** */
function init(){ 

    tableDraw(WIDTH_GRILLE,1,document.getElementById('header'),grilleAction,NO_ACTION,DROP);
    //grille = testDrawDiagonalIntern();
    tableDraw(WIDTH_GRILLE,HEIGHT_GRILLE,document.getElementById('main'),grille,ACTION,NO_DROP);
}
/**
 * 
 */
function testDraw(){
    return  [
        [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
        [ORANGE_RINGLESS,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
        [ORANGE_RINGLESS,EMPTY_CELL,EMPTY_CELL,ORANGE_RINGLESS,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
        [ORANGE_RINGLESS,EMPTY_CELL,ORANGE_RINGLESS,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
        [PURPLE_CELL,ORANGE_RINGLESS,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
        [ORANGE_RINGLESS,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
    ];
}



/**
 * 
 */
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
/**
 * 
 * @param {*} element 
 */
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
  // win.appendChild(img);
   body.appendChild(win);
   console.log(HumaniseColor[stateColor] + " Win this game.");
}
/**
 * 
 * @param {*} width 
 * @param {*} height 
 * @param {*} element 
 * @param {*} grille 
 * @param {*} Action 
 * @param {*} Drop 
 */
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

        if (animateWinPosition(j,i)){
            img.classList.add('winPositionRotate');
        }

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
/**
 * 
 * @param {*} indexSource 
 */  
function setImgSource(indexSource){   
    return  sourceImg[indexSource];    
  }
/**
 * 
 */
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


        document.querySelector('#header').innerHTML ="";
    
        animateCoinInTd(indexJ,indexI);
        //handling animation
        var self = this;
        setTimeout(function() {
            //we draw the board 
            tableDraw(WIDTH_GRILLE,HEIGHT_GRILLE,document.getElementById('main'),grille,ACTION,NO_DROP);        
            //

            if (checkWinState(grille,indexJ,indexI)){
                winMsg(document.querySelector('#header'));
                //animate vector winner
                tableDraw(WIDTH_GRILLE,HEIGHT_GRILLE,document.getElementById('main'),grille,ACTION,NO_DROP);
            } else{
             // we change the stateColor
             stateColor = switchStateColor(); 
             tableDraw(WIDTH_GRILLE,1,document.getElementById('header'),grilleAction,NO_ACTION,DROP); 
            }
            
             
        }, 500,self);
       
          
        
  }
  /**
   * 
   */
  function animateWinPosition(y,x){
      let match = false
       for (let i = 0 ; i < vectorWinPosition.length ;i++ ){
        if ( vectorWinPosition[i].y == y && vectorWinPosition[i].x == x ){
            return true;
        }
       }
       return match;
  }
/**
 * 
*/
function showCoin(){
    this.src=sourceImg[stateColor]; 
}
/**
 * 
 */
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
        mo[0].style.left = "" + (WIDTH_COIN * parseInt(indexJ))  + "px";
        mo[0].style.animation = selectAnimCoinClass(indexI);
}
/**
 * 
 * @param {*} index 
 */
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

/**
 * 
 */
function switchStateColor(){
     if (stateColor == ORANGE_RINGLESS) {
        return PURPLE_RINGLESS;
     }else{
        return ORANGE_RINGLESS;
     }

 }
/**
 * 
 * @param {*} grille 
 * @param {*} col 
 * @param {*} row 
 */
function checkWinState(grille,col,row){
       return  resultstack =  verticalCheck(grille,col,row) || horizontalCheck(grille,col,row) || diagonalSlashCheck(grille) || diagonalAntiSlashCheck(grille); 
       
 }

function horizontalCheck(grille,col,row){
    vectorWinPosition = [];
    let stackcolor =0;
    let indexFirst = 0;
    col = parseInt(col);
    row = parseInt(row);
    nbColorPlayer = 0; 

    // nb jeton dans la ligne 
    for(let x = 0 ; x < WIDTH_GRILLE;x++){
        if (grille[row][x] == stateColor){
            nbColorPlayer++;
                  
        }
    }
    // si il y a matiere à verifier un win 
    if (nbColorPlayer >= 4) {
        for (let i = 0 ; i <= 3 ;i++){
            if (stackcolor == 4){
                break;
            }else{
                vectorWinPosition = [];
            } 
            stackcolor = 0;
            vectorWinPosition = [];
           for (let j = i; j <= (i + 3);j++ ){
                if (grille[row][j] == stateColor){
                    stackcolor++;
                    vectorWinPosition.push({'y' : row,'x' : j});
                }
           } 
        }
    }
    if (stackcolor !== 4){
        vectorWinPosition =[];
    }
    return (stackcolor == 4) ? true : false;         
 }
 /**
  * 
  * @param {*} grille 
  * @param {*} col 
  * @param {*} row 
  */
function verticalCheck(grille,col,row){
    vectorWinPosition = [];
    let stackcolor =0;
    let indexFirst = 0;
    x = parseInt(col);
    row = parseInt(row);
    nbColorPlayer = 0; 
    // nb jeton dans la colonne 
    for(let y = HEIGHT_GRILLE-1 ; y >= 0;y--){
        if (grille[y][x] == stateColor){
            nbColorPlayer++;              
        }
    }
    // si il y a matiere à verifier un win 
    if (nbColorPlayer >= 4) {
        for (let y = HEIGHT_GRILLE -1 ; y >= 3 ;y--){
            if (stackcolor == 4){
                break;
            }else{
                 // memory position coin for rotate if win
                 vectorWinPosition = [];
            } 
            stackcolor = 0;
           for (let j = y; j >= (y - 3);j-- ){
                if (grille[j][x] == stateColor){
                    stackcolor++;
                    vectorWinPosition.push({'y' : j,'x' : x});
                }
           } 
        }
    }
    return (stackcolor == 4) ? true : false;
 }
/**
 * 
 * @param {*} grille 
 * 
 */
function diagonalSlashCheck(grille){
    vectorWinPosition = [];
    let stackcolor =0;
    let xx =0;
    let yy = 0;
    //bruteForce
    for (let x = 0 ; x < WIDTH_GRILLE  ; x++){
        for (let y = 0 ; y < HEIGHT_GRILLE ; y++){
                xx = x;
                yy = y;
                stackcolor =0;
                if ((xx + 3 < WIDTH_GRILLE ) && (yy - 3 >= 0)  ) {
                    for (let i = xx ; i <= xx + 3 ; i++) {
                      try{
                        if (grille[yy][i] == stateColor) {
                        stackcolor++;
                        vectorWinPosition.push({'y' : yy,'x' : i});
                        }
                      }catch(error){
                          console.log(error);
                      }  
                          yy--;
                    }
                }
            if (stackcolor === 4) {
                return true;
            }else{
                vectorWinPosition = []; 
            }

        }
      
    }

    return (stackcolor === 4)
}

/**
 * 
 * @param {*} grille 
 */
function diagonalAntiSlashCheck(grille){
    vectorWinPosition = [];
    let stackcolor =0;
    let xx =0;
    let yy = 0;
    //bruteForce
    for (let x = WIDTH_GRILLE-1 ; x >= 0  ;x--){
        for (let y = HEIGHT_GRILLE -1 ; y >= 0  ; y--){
                xx = x;
                yy = y;
                stackcolor =0;
                if ((xx - 3 >= 0 ) && (yy - 3 >= 0)  ) {
                    for (let i = xx ; i >= xx - 3; i--) {
                      try{
                        if (grille[yy][i] == stateColor) {
                        stackcolor++;
                        vectorWinPosition.push({'y' : yy,'x' : i});
                        }
                      }catch(error){
                          console.log(error);
                      }  
                          yy--;
                    }
                }
            if (stackcolor === 4) {
                return true;
            }else{
                vectorWinPosition = [];
            }

        }
      
    }

    return (stackcolor === 4)

}

//spider Algo À voir checkWin 
// on check a partir du coin droppé.


