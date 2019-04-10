// you can write js here
console.log('exo-3');

/**
 *
 * @param max
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 *
 * @param arr
 * @returns {*}
 */
function getComputerChoice(arr){
    //cc = onsole.log(arr[getRandomInt(3)]);
    return arr[getRandomInt(3)];
}

/**
 *
 * @param elem
 * @returns {*}
 */
function getUserChoice(elem){
    if (Tools.contains(elem)){
        return elem;
    }else{
        console.log("Error ! sur l'entrée de l'utilisateur");
    }
}
Array.prototype.contains = function(elem)
{
    for (var i in this)
    {
        if (this[i] == elem) return true;
    }
    return false;
}

/**
 *
 * @param user
 * @param computer
 */
function determineWinner(userChoice,computerChoice){
    if (userChoice === 'bomb'){
        return 'Win !!! Extra Win';
    }

    if (userChoice === computerChoice){
        return 'Tied';
    }else{
        if (userChoice === "rock"){
            if (computerChoice === "scissors"){
                return 'Won';
            }else{
                return 'Lost';
            }
        }

        if (userChoice === "paper" ){
            if (computerChoice === "rock"){
                return 'Won';
            }else{
                return 'Lost';
            }
        }

        if (userChoice === "scissors" ){
            if (computerChoice === "paper"){
                return 'Won';
            }else{
                return 'Lost';
            }
        }

    }


}


function playGame(){

    let uCHoice = getUserChoice(prompt("ROck paper scissors ? : ").toLowerCase());
    let cChoice = getComputerChoice(Tools);
    console.log('User : ' +  uCHoice);
    console.log('Computer :'+ cChoice);
    console.log(determineWinner(uCHoice,cChoice));
}
/**-------------------------------------------------------------------------------**/
let Tools =['rock','paper','scissors','bomb'];

playGame();





