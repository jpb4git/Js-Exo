// you can write js here
console.log('exo-3');
const GAME_MAX= 3;
let tools =['rock','paper','scissors','bomb'];
playGame();

function playGame(){

    let uCHoice = getUserChoice(prompt("ROck paper scissors ? : ").toLowerCase());
    let cChoice = getComputerChoice(tools);
    console.log('User : ' +  uCHoice);
    console.log('Computer :'+ cChoice);
    console.log(determineWinner(uCHoice,cChoice));
}

//------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
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
function getComputerChoice(valideChoice){

    return valideChoice[getRandomInt(GAME_MAX)];
}

/**
 *
 * @param elem
 * @returns {*}
 */
function getUserChoice(elem){
    if (tools.indexOf(elem) > -1){
        return elem;
    }else{
        console.log("Error ! sur l'entrée de l'utilisateur");
    }
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







