const sourceImg = ['img/empty.svg','img/orange.svg','img/purple.svg','img/empty-ringLess.svg','img/orange-ringLess.svg','img/purple-ringLess.svg'];
const EMPTY_CELL        = 0;
const ORANGE_CELL       = 1;
const PURPLE_CELL       = 2;
const EMPTY_RINGLESS    = 3;
const ORANGE_RINGLESS   = 4;
const PURPLE_RINGLESS   = 5;

const WIDTH_GRILLE      = 7;
const HEIGHT_GRILLE     = 6;

const NO_DROP = false;
const DROP = true;
const NO_ACTION =false;
const ACTION =true;

// set the turn for players first play with orange coin  ... 
let stateColor = ORANGE_RINGLESS;

let grilleAction =[EMPTY_RINGLESS,EMPTY_RINGLESS,EMPTY_RINGLESS,EMPTY_RINGLESS,EMPTY_RINGLESS,EMPTY_RINGLESS,EMPTY_RINGLESS ];

let grille = [
    [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
    [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
    [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
    [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
    [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
    [EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL,EMPTY_CELL],
];

/**************************************************************************************************** */
init();





/************************************************************************************************ */


// UNE FONCTION INIT QUI CREER LA TABLE 
function init(){ 
    tableDraw(WIDTH_GRILLE,1,document.getElementById('header'),grilleAction,NO_ACTION,DROP);
    tableDraw(WIDTH_GRILLE,HEIGHT_GRILLE,document.getElementById('main'),grille,ACTION,NO_DROP);
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

/**
 * 
 * @param {*} indexSource 
 * @return String   //source path
 */
  function setImgSource(indexSource){   
    return  sourceImg[indexSource];    
  }

  function dropCoin(){
        /// here we drop coin on column 
        for (i = HEIGHT_GRILLE-1 ; i >= 0; i--){              
            if( grille [i][this.dataset.index] == EMPTY_CELL ){
                grille[i][this.dataset.index]= stateColor;
                checkWinState(i,this.dataset.index);
                break;
            }    
        }
        //we draw the board 
        tableDraw(WIDTH_GRILLE,HEIGHT_GRILLE,document.getElementById('main'),grille,ACTION,NO_DROP);        

        // we check if player win the game 
        checkWinState();
        
        // we change the stateColor
        stateColor = switchStateColor(); 
     
  }
  function showCoin(){
    this.src=sourceImg[stateColor]; 
}
function leaveCoin(){
    this.src=sourceImg[EMPTY_RINGLESS]; 
}
 // une fonction qui remplie  la table avec les img 

 function switchStateColor(){
     if (stateColor == ORANGE_RINGLESS) {
        return PURPLE_RINGLESS;
     }else{
        return ORANGE_RINGLESS;
     }

 }
/**
 * 
 */
 function checkWinState(col,row){


 }


